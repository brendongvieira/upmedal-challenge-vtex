import React from "react";
import { Container, Button, Form } from "react-bootstrap";

import Amplify from "aws-amplify";
import { API } from "aws-amplify";

import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
API.configure(awsconfig);

const formState: { [x: number]: any; name: any; email: any; phone: any } = {
  name: "",
  email: "",
  phone: "",
};

async function addContact() {
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
    },
  };

  console.log(data);
  const apiData = await API.post("upmedalformapi", "/upmedalform", data);
  console.log({ apiData });
  alert("Contato cadastrado!");
}

function updateFormState(key: any, value: any) {
  formState[key] = value;
}

function newApp() {
  return (
    <Container>
      <div>
        <br />
        <Form className="LeadForm">
          <Form.Group className="name">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              placeholder="Nome"
              onChange={(e) => updateFormState("name", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control
              placeholder="Email"
              type="email"
              onChange={(e) => updateFormState("email", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Celular: </Form.Label>
            <Form.Control
              placeholder="Celular"
              onChange={(e) => updateFormState("phone", e.target.value)}
            />
          </Form.Group>
          <Button onClick={addContact}>Receba seu cupom!</Button>
        </Form>
      </div>
    </Container>
  );
}

export default newApp;
