import pandas as pd
from redisEmbed import *
import time

csv_path = '../datasets/Evaluated_AI_EarthHack_Dataset.csv'

df = pd.read_csv(csv_path, encoding='ISO-8859-1')

df = df.reset_index()  # make sure indexes pair with number of rows


# https://stackoverflow.com/questions/3173320/text-progress-bar-in-terminal-with-block-characters
# Print iterations progress
def printProgressBar(iteration, total, prefix='', suffix='', decimals=1, length=100, fill='█', printEnd="\r"):
    """
    Call in a loop to create terminal progress bar
    @params:
        iteration   - Required  : current iteration (Int)
        total       - Required  : total iterations (Int)
        prefix      - Optional  : prefix string (Str)
        suffix      - Optional  : suffix string (Str)
        decimals    - Optional  : positive number of decimals in percent complete (Int)
        length      - Optional  : character length of bar (Int)
        fill        - Optional  : bar fill character (Str)
        printEnd    - Optional  : end character (e.g. "\r", "\r\n") (Str)
    """
    percent = ("{0:." + str(decimals) + "f}").format(100 * (iteration / float(total)))
    filledLength = int(length * iteration // total)
    bar = fill * filledLength + '-' * (length - filledLength)
    print(f'\r{prefix} |{bar}| {percent}% {suffix}', end=printEnd)
    # Print New Line on Complete
    if iteration == total:
        print()


if __name__ == "__main__":
    # initialize_database()
    i = 0
    rds = existing_database()
    num_rows = df.shape[0]
    printProgressBar(0, num_rows, prefix='Progress:', suffix='Complete', length=50)
    for index, row in df.iterrows():
        texts = [str(row['problem']) + str(row['solution'])]
        metadata = [{
            "novelty_score": row['novelty_score'],
            "utility_score": row['utility_score'],
            "surprise_score": row['surprise_score'],
        }]
        add_vectors(rds, texts, metadata)
        i += 1
        printProgressBar(i + 1, num_rows, prefix='Progress:', suffix='Complete', length=50)
        # time.sleep(1.0)
        # print(texts)
        # print(metadata)
