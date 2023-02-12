import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [hasRequestError, setHasRequestError] = useState(null);

  const submit = async (url, data) => {
    const random = Math.random();
    setHasRequestError(false);
    setLoading(true);

    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
      setHasRequestError(false);

    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      });
      setHasRequestError(true);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit, hasRequestError };
}

export default useSubmit;
