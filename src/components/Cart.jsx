import React, { useState } from "react";
import { Button, Container } from "reactstrap";
import { Alert } from "reactstrap";

function Cart({ cartItems, updateQuantity, removeItem }) {
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  function handlePurchase() {
    if (cartItems.length !== 0){
      setVisible(true)
      
    }
  }

  return (
    <>
      <Container className="cart">
        <h1>
          <u>Added Products</u>
        </h1>
        {cartItems.map((item) => (
          <div
            key={item.productName}
            style={{ display: "flex", marginBottom: "10px" }}
          >
            <p style={{ flex: 1 }}>{item.productName}</p>
            <p style={{ flex: 1 }}>${item.price}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button color="warning" onClick={() => updateQuantity(item, -1)}>
                -
              </Button>
              <p style={{ margin: "0 10px" }}>{item.quantity}</p>
              <Button color="primary" onClick={() => updateQuantity(item, 1)}>
                +
              </Button>
              <Button
                color="danger"
                onClick={() => removeItem(item)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}

        <h3>Total Price: ${calculateTotalPrice()}</h3>

        <Alert color="info" isOpen={visible} toggle={ onDismiss }>
          Purchase Successful!!!
        </Alert>
        <Button color="primary" onClick={() => {
          handlePurchase()
          }} >Purchase</Button>
      </Container>
    </>
  );
}

export default Cart;
