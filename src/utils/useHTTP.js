import { getElementError } from "@testing-library/react";
import { useState, useEffect } from "react";

const axios = require("axios"); // npm i axios

//axios.get({url, params:{}, initialState:[]})
const useGet = ({ url, params = {}, initialState = [] }) => {
  //isloading
  //error
  //data
  const [data, setData] = useState(initialState);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await axios.get(url, params); //prop : data
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    get();
  }, [url]); //Si cambia lo del [] se vuelve a ejecutar el useEffect
  return [data, isLoading, error];
};

const usePost = async (url, obj) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({});

  try {
    setData(await axios.post(url, obj));
  } catch (e) {
    setError(false);
  }

  return [data, error];
};

export default useGet;
