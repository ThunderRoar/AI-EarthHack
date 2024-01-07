// src/components/DataFetcher.js
import React, { useEffect, useState } from 'react';

function ApiDataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://animechan.xyz/api/random');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Data from API:</h2>
          <p>{data.anime}</p>
        </div>
      )}
    </div>
  );
}

export default ApiDataFetcher;

/*
const DataFetcher = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <div>{data ? <p>Data: {data}</p> : <p>Loading...</p>}</div>;
}

export default DataFetcher;
*/

/*
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const article
*/