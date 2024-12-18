import React, { useEffect, useState } from "react";

const ErrorMsg = ({ message }) => {
  const [errorMessage, setErrorMessage] = useState(message);

  useEffect(() => {
    // If there's a new message, set it immediately
    if (message) {
      setErrorMessage(message);

      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  // If no message or errorMessage is null, return null
  if (!errorMessage) {
    return null;
  }

  return <div className="error">{errorMessage}</div>;
};

export default ErrorMsg;
