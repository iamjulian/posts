import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLodaing] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortControl = new AbortController();

    // Use of Axios would had been a better option
    // But i chose the basic fetch method as it was not a very complicated api
    // and fetch method can easily handle this.
    fetch(url, { signal: abortControl.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resourse");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLodaing(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Aborting Fetch Request");
        } else {
          setIsLodaing(false);
          setError(err.message);
        }
      });

    //Cleanup function
    //It is used here to avoid any errors while cancelling fetch reqests.
    return () => abortControl.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
