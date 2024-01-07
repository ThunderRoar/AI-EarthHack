# https://python.langchain.com/docs/integrations/text_embedding/cohere
# https://python.langchain.com/docs/integrations/vectorstores/mongodb_atlas
# https://www.mongodb.com/docs/atlas/atlas-vector-search/create-index/
# https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-type/#std-label-avs-types-vector-search

import os
import dotenv
import certifi
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from langchain_community.vectorstores.mongodb_atlas import MongoDBAtlasVectorSearch
from langchain_community.embeddings import CohereEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter

dotenv.load_dotenv()

ca = certifi.where()

COHERE_API_KEY = os.environ["COHERE_API_KEY"]
MONGODB_ATLAS_CLUSTER_URI = os.environ["MONGO_COLLECTION_STRING"]
DB_NAME = "mongoBar"
COLLECTION_NAME = "embey"
ATLAS_VECTOR_SEARCH_INDEX_NAME = "problem_index"
# ATLAS_VECTOR_SEARCH_INDEX_NAME = "index_name"


def insert_embed():
        client = MongoClient(MONGODB_ATLAS_CLUSTER_URI, server_api=ServerApi('1'), tlsCAFile=ca)
        mongo_collection = client[DB_NAME][COLLECTION_NAME]

        # https://www.cloudflare.com/learning/ai/what-are-embeddings/
        text = ("Embeddings are representations of values or objects like text, images, and audio that are designed to be "
                "consumed by machine learning models and semantic search algorithms. They translate objects like these into a "
                "mathematical form according to the factors or traits each one may or may not have, and the categories they "
                "belong to. Essentially, embeddings enable machine learning models to find similar objects. Given a photo or "
                "a document, a machine learning model that uses embeddings could find a similar photo or document. Since "
                "embeddings make it possible for computers to understand the relationships between words and other objects, "
                "they are foundational for artificial intelligence (AI). In mathematics, a vector is an array of numbers that "
                "define a point in a dimensional space. In more practical terms, a vector is a list of numbers — like {1989, "
                "22, 9, 180}. Each number indicates where the object is along a specified dimension. In machine learning, "
                "the use of vectors makes it possible to search for similar objects. A vector-searching algorithm simply has "
                "to find two vectors that are close together in a vector database. To understand this better, think about "
                "latitude and longitude. These two dimensions — north-south and east-west, respectively — can indicate the "
                "location of any place on Earth. The city of Vancouver, British Columbia, Canada can be represented as the "
                "latitude and longitude coordinates {491540N, 1230650W}. This list of two values is a simple vector. Now, "
                "imagine trying to find a city that is very near Vancouver. A person would just look at a map, "
                "while a machine learning model could instead look at the latitude and longitude (or vector) and find a place "
                "with a similar latitude and longitude. The city of Burnaby is at {4916N, 12258W} — very close to {491540N, "
                "1230650W}. Therefore, the model can conclude, correctly, that Burnaby is located near Vancouver.")

        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=150)
        docs = text_splitter.create_documents([text])

        vector_search = MongoDBAtlasVectorSearch.from_documents(
            documents=docs,
            embedding=CohereEmbeddings(model="embed-english-light-v3.0"),
            collection=mongo_collection,
            index_name=ATLAS_VECTOR_SEARCH_INDEX_NAME,
        )

        query = "What is an embedding?"
        results = vector_search.similarity_search(query)

        print(results[0].page_content)



def query_embed():
        client = MongoClient(MONGODB_ATLAS_CLUSTER_URI, server_api=ServerApi('1'), tlsCAFile=ca)
        mongo_collection = client[DB_NAME][COLLECTION_NAME]

        embeddings = CohereEmbeddings(model="embed-english-light-v3.0")
        query = embeddings.embed_query("Embeddings are representations of values or objects")

        pipeline = [{
                "$vectorSearch": {
                        "index": "problem_index",
                        "path": "problem_embedding",
                        "queryVector": query,
                        "numCandidates": 100,
                        "limit": 5
                }
        }]

        result = mongo_collection.aggregate(pipeline)

        print(result)

        for i in result:
                print(i)

query_embed()