## Getting Started
### Folder Structure
```yaml
.
├── .dockerignore         # Ignores .env file when building container
├── Dockerfile            # For building Docker container
├── importCsv.py          # Used to import evaluated dataset into Redis Vector Database
├── main.py               # FastAPI main file
├── README.md
├── redis_schema.yaml     # Schema for Redis vectors
├── redisEmbed.py         # Functions related to Redis
└── requirements.txt
```
### Preparing Redis Database
1. Create a Redis Cloud database or local database
#### Local Database
1. Run `docker run -d -p 6379:6379 -p 8001:8001 redis/redis-stack:latest`
2. Redis URL is now `redis://localhost:6379`
### Preparing Environment
> If running Docker container instead, skip to [Running Container](#running-container), assuming dataset is already imported
1. `cd` into this directory and create a virtual environment `python3.11 -m venv venv`
2. Activate the environment `source venv/bin/activate`
3. Install all modules `pip install -r requirements.txt`
4. Create a `.env` file in the root directory similar to below, Cohere/OpenAI depending on embedding preference
```markdown
COHERE_API_KEY=<COHERE_API_KEY>
OPENAI_API_KEY=<OPENAI_API_KEY>
REDIS_URL=<REDIS_URL>
```
### Importing the Dataset to Redis
1. Initialize the database by running `python redisEmbed.py`
2. Change `csv_path` in `importCsv.py` to the path of the CSV data
3. Run `python importCsv.py` and wait for completion
   - If you have many rows, you may want to add a sleep timer to not barrage Redis and the embedding API
### Running the Server
1. Run `uvicorn main:app --reload`
### Getting Results
1. The server is hosted on port `8000`. Send GET request to `http://127.0.0.1:8000/v1/{query}` with query being the combination of your problem and solution
## Docker
### Building Container
1. Run `docker buildx build --platform=linux/amd64 --output type=docker -t jamesliangg/<CONTAINER_NAME> .`
2. Push to Docker Hub using `docker push jamesliangg/<CONTAINER_NAME>`
### Running Container
1. Create a `.env` file in the directory you're running the `run` similar to below, Cohere/OpenAI depending on embedding preference
```markdown
COHERE_API_KEY=<COHERE_API_KEY>
OPENAI_API_KEY=<OPENAI_API_KEY>
REDIS_URL=<REDIS_URL>
```
2. Run `docker run -p 8000:8000 --env-file ./.env -d jamesliangg/<CONTAINER_NAME>`