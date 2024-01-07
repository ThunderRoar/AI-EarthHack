## Getting Started
### Folder Structure
```yaml
.
├── importCsv.py          # Used to import evaluated dataset into Redis Vector Database
├── main.py               # FastAPI main file
├── README.md
├── redis_schema.yaml     # Schema for Redis vectors
├── redisEmbed.py         # Functions related to Redis
└── requirements.txt
```
### Preparing Environment
1. `cd` into this directory and create a virtual environment `python3.11 -m venv venv`
2. Activate the environment `source env/bin/activate`
3. Install all modules `pip install -r requirements. txt`
4. Create a `.env` file in the root directory similar to below
```markdown
COHERE_API_KEY=<COHERE_API_KEY>
REDIS_URL=<REDIS_URL>
```
### Importing the Dataset to Redis
1. Initialize the database by running `python redisEmbed.py`
2. Change `csv_path` in `importCsv.py` to the path of the CSV data
3. Run `python importCsv.py` and wait for completion
   - If you many rows, you may want to add a sleep timer to not barrage Redis
### Running the Server
1. Run `uvicorn main:app --reload`
### Getting Results
1. The server is hosted on port `8000`. Send GET request to `http://127.0.0.1:8000/v1/{query}` with query being the combination of your problem and solution
