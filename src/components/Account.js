import React, { useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

export const Account = () => {
  const [email, setEmail] = useState("Rupesh");

  function save() {
    
  }

  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col md={5}>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  id="Email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  id="Password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>
          <h3>Shipping Details</h3>
          <FormGroup>
            <Label for="Address">Address</Label>
            <Input
              id="Address"
              name="address"
              placeholder="123 XYZ Street"
            />
          </FormGroup>
            <Col md={8}>
              <FormGroup>
                <Label for="City">City</Label>
                <Input id="City" name="city" placeholder="Enter city name" />
              </FormGroup>
            </Col>
            <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="State">State</Label>
                <Input id="State" name="state" placeholder="Enter state name" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="Zip">Zip</Label>
                <Input id="Zip" name="zip" placeholder="Enter zip code" />
              </FormGroup>
            </Col>
            </Row>
          <Button>Save</Button>
        </Form>
      </Container>
    </>
  );
};
