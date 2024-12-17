import { useEffect, useState } from "react";

const Notification = ({ message }) => {
    const [visibleMessage, setVisibleMessage] = useState(message);

    useEffect(() => {
        setVisibleMessage(message);
        const timer = setTimeout(() => {
            setVisibleMessage(null);
            console.log(timer);
            
        }, 1000);

        return clearTimeout(timer)
    }, [message])

    if (!message) {
        return null;
    }

    if (message === null) {
        return null;
    }

    return (
        <>
            <div className="success">{message}</div>
        </>
    );
};

export default Notification;
