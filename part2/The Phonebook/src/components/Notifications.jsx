import React, { useEffect, useState } from "react";

const Notification = ({ message }) => {
  const [successMessage, setSuccessMessage] = useState(message);

  useEffect(() => {
    // If there's a new message, set it immediately
    if (message) {
      setSuccessMessage(message);

      // Create a timeout to clear the message
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 4000);

      // Cleanup function to clear the timeout if component unmounts or message changes
      return () => clearTimeout(timer);
    }
  }, [message]);

  // If no message or successMessage is null, return null
  if (!successMessage) {
    return null;
  }

  return (
    <div className="success">{successMessage}</div>
  );
};

export default Notification;