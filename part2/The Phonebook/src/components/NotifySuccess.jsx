import React, { useEffect, useState } from "react";

const Success = ({ message }) => {
  const [successMessage, setSuccessMessage] = useState(message);

  useEffect(() => {
    // If there's a new message, set it immediately
    if (message) {
      setSuccessMessage(message);

      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  // If no message or successMessage is null, return null
  if (!successMessage) {
    return null;
  }

  return <div className="success">{successMessage}</div>;
};

export default Success;
