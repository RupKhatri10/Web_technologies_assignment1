import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  Col,
  Container,
  Row,
} from "reactstrap";

import products from "./Product.json";
import Cart from "./Cart";

export const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const existingItem = cartItems.find(cartItem => cartItem.productName === item.productName);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.productName === item.productName
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }

  function updateQuantity(item, amount) {
    setCartItems(cartItems.map(cartItem =>
      cartItem.productName === item.productName
        ? { ...cartItem, quantity: cartItem.quantity + amount }
        : cartItem
    ).filter(cartItem => cartItem.quantity > 0));
  }

  function removeItem(item) {
    setCartItems(cartItems.filter(cartItem => cartItem.productName !== item.productName));
  }

  let myProducts = products;

  return (
    <>
      <Container className="home">
        <Col>
          <Row xs="3" className="bg-light border">
            {myProducts.map((item) => (
              <Card style={{padding: "10px"}} key={item.productName}>
                <img alt={item.productName} src={item.image} />
                <CardTitle>{item.productName}</CardTitle>
                <CardText>{item.productDescription}</CardText>
                <CardText>${item.price}</CardText>
                <Col>
                  <Button color="success" onClick={() => addToCart(item)}>Add to Cart</Button>
                </Col>
              </Card>
            ))}
          </Row>
          <Cart cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />
        </Col>
      </Container>
      <footer style={{ backgroundColor: "#f8f9fa", padding: "2rem", marginTop: "2rem" }}>
      </footer>
    </>
  );
};
