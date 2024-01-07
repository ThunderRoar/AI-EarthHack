# https://fastapi.tiangolo.com/#example
from fastapi import FastAPI
from redisEmbed import *
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/v1/{query}")
def query_dataset(query: str):
    """
    Gets the score of the query and adds to database
    :param query: Query text
    :return: Dictionary containing query text and scores
    """
    rds = existing_database()
    # print("Exiting Database")
    score_dict = determine_score(rds, query)
    # add_vectors(rds, [query], [score_dict])
    return {"query": query, "scores": score_dict}
