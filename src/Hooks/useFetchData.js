import { useState, useEffect } from "react";
import API from '../Api';

export const useFetchData = () => {
  const [ state, setState ] = useState({})
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  
  const fetchAll = async () => {
    try {
      setError(false);
      setLoading(true);
      const Alldata = await API.fetchData();
      setState(Alldata);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchAll();
  }, []);

  return {state, loading, error }

}