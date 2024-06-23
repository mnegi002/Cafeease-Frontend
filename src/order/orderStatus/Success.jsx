import React, { useEffect, useState } from "react";
import classes from "./Status.module.css";

export default function Success() {
  const [remainingSeconds, setRemainingSeconds] = useState(5);

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setRemainingSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Redirect to your desired page after 5 seconds
    const redirectTimeout = setTimeout(() => {
      window.location.href = "/order";
    }, 5000);

    // Cleanup the timer on component unmount
    return () => {
      clearInterval(redirectTimer);
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <>
      <div className={classes.success}>
        <h2>Your order has been successfully placed &#128512;</h2>
        {/* <p>{`You will be redirected to <b>My Orders</b> in ${remainingSeconds} seconds`}</p> */}
        <p>
          You will be redirected to{" "}
          <span style={{ fontWeight: "bold" }}>My Orders</span> in {remainingSeconds}{" "}
          seconds
        </p>
      </div>
    </>
  );
}
