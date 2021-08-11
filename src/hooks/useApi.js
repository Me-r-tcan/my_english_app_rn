import { useState } from "react";
import _ from "lodash";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);

    if (_.isString(response.data)) {
      setError(true);
    } else {
      setData(response.data);
    }

    return response;
  };

  return { data, error, loading, request };
};
