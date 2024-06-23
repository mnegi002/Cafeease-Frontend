import React, { useEffect, useState } from "react";
import classes from "./Status.module.css";

export default function Failed() {
  const [remainingSeconds, setRemainingSeconds] = useState(5);

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setRemainingSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Redirect to your desired page after 5 seconds
    const redirectTimeout = setTimeout(() => {
      window.location.href = "/menu";
    }, 5000);

    // Cleanup the timer on component unmount
    return () => {
      clearInterval(redirectTimer);
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <>
      <div className={classes.failed}>
        <h2>Uh no! you have cancelled the payment &#128542;</h2>
        {/* <p>{`You will be redirected to <b>menu</b> in ${remainingSeconds} seconds`}</p> */}
        <p>
          You will be redirected to{" "}
          <span style={{ fontWeight: "bold" }}>Menu</span> in {remainingSeconds}{" "}
          seconds
        </p>
      </div>
    </>
  );
}
