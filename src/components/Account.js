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
  Alert,
} from "reactstrap";

export const Account = () => {
  const [name, setName] = useState("Rup Chandra Khatri");
  const [email, setEmail] = useState("rup01@gmail.com");
  const [password, setPassword] = useState("password");
  const [address, setAddress] = useState("123 XYZ Street")
  const [city, setCity] = useState("Kitchener");
  const [state, setState] = useState("Ontario");
  const [zip, setZip] = useState("N2M 2A6")

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  return (
    <>
      <Container>
        <h2>Account details</h2>
        <Form>
          <Col md={5}>
            <FormGroup>
              <Label for="text">Name</Label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                id="Email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                id="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </FormGroup>
          </Col>
          <h3>Shipping Details</h3>
          <FormGroup>
            <Label for="Address">Address</Label>
            <Input id="Address" name="address" value={address}
             onChange={(e) => {
              setAddress(e.target.value)
            }}
            />
          </FormGroup>
          <Col md={8}>
            <FormGroup>
              <Label for="City">City</Label>
              <Input id="City" name="city" value={city}
              onChange={(e) => {
                setCity(e.target.value)
              }}
              />
            </FormGroup>
          </Col>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="State">State</Label>
                <Input id="State" name="state" value={state}
                onChange={(e) => {
                  setState(e.target.value)
                }}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="Zip">Zip</Label>
                <Input id="Zip" name="zip" value={zip}
                onChange={(e) => {
                  setZip(e.target.value)
                }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Alert color="info" isOpen={visible} toggle={onDismiss}>
            Account information updated.
          </Alert>
          <Button color="primary" onClick={() => {setVisible(true)} }>Save</Button>
        </Form>
      </Container>
    </>
  );
};
