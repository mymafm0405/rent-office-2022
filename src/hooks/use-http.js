import { useCallback, useState } from "react";
import axios from "axios";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [currentError, setCurrentError] = useState(null);
  const [carId, setCarId] = useState("");

  const sendPostRequest = (requestDetails, applyData) => {
    setLoading(true);
    axios
      .post(requestDetails.url, requestDetails.body)
      .then((res) => {
        console.log(res);
        console.log(res.data.name);
        setLoading(false);
        setCarId(res.data.name);
        applyData();
      })
      .catch((error) => {
        setLoading(false);
        setCurrentError(error);
      });
  };

  const getRequest = useCallback((requestDetails, applyData) => {
    setLoading(true);
    axios.get(requestDetails.url).then((res) => {
      applyData(res);
    });
  }, []);

  return {
    loading,
    currentError,
    sendPostRequest,
    getRequest,
    carId,
  };
};

export default useHttp;
