import React, { useEffect, useState } from "react";

const Notification = ({ message }) => {
  const [visibleMessage, setVisibleMessage] = useState(message);

  useEffect(() => {
    // If there's a new message, set it immediately
    if (message) {
      setVisibleMessage(message);

      // Create a timeout to clear the message
      const timer = setTimeout(() => {
        setVisibleMessage(null);
      }, 1000);

      // Cleanup function to clear the timeout if component unmounts or message changes
      return () => clearTimeout(timer);
    }
  }, [message]);

  // If no message or visibleMessage is null, return null
  if (!visibleMessage) {
    return null;
  }

  return (
    <div className="success">{visibleMessage}</div>
  );
};

export default Notification;