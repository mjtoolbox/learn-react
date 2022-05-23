import React from 'react';
import axios from 'axios';
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
// const queryClient = new QueryClient()
// const query = useQuery("todo", getTodos);

const Query02 = () => {
  const fetchData = async () => {
    try {
      var url = 'http://localhost:8000/todos';
      const response = await axios.get(url);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Fetch data now! See console</h1>
      <button onClick={fetchData}>Fetch!</button>
    </>
  );
};

export default Query02;
