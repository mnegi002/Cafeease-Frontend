import React, { useState, useEffect } from "react";
import classes from "./OrderCard.module.css";
import { baseUrl } from "../url";

export default function OrderCard() {
  const [orderData, setOrderData] = useState(null);

  // Assuming you have the email stored in localStorage
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/myorderData`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail }),
        });

        if (response.ok) {
          const data = await response.json();
          setOrderData(data.orderData);
        } else {
          console.error("Error fetching order data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchOrderData();
  }, [userEmail]);

  return (
    <div className={classes.divmain}>
      {/* <div className={classes.main}> */}
      {orderData && (
        <div className={classes.orderdiv}>
          <h2>Order Date: {orderData.orderDate}</h2>
          {orderData.items &&
            orderData.items.map((item, index) => (
              <div className={classes.container}>
                <div className={classes.box} key={index} id="box1">
                  <h3>Name: {item.name}</h3>
                  <h3>Quantity: {item.quantity}</h3>
                  <h4>₹{item.price}</h4>
                </div>
                {/* <div className={classes.box2} id="box2">
                    <img src="chai.jpg" alt="img" />
                  </div> */}
              </div>
            ))}
            <div className={classes.line}></div>
        </div>
      )}
      {!orderData && (
        <h1>Oops !! You haven't placed any order yet &#128542;</h1>
      )}
    </div>
  );
}
