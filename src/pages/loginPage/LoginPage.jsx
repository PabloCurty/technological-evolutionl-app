import React, { useState, useCallback } from "react";
import "./LoginPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = useCallback(() => navigate('/', {replace: true}), [navigate]);
  return (
    <div className="login-page">
      <div id="login-container" className="col-md-4">
        <Container>
          <Row>
            <Col>
              <h1 className="title">Login</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                >
                  <Form.Label className="label">Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                >
                  <Form.Label className="label">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Stack gap={2} className="col-md-5 mx-auto">
                  <Button className="clickable login-button mt-3" onClick={handleLogin}>
                    Send
                  </Button>
                </Stack>
              </Form>
              {/* <div className="form">
                <div className="field">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="actions">
                  <button onClick={handleLogin}>Send</button>
                </div>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
