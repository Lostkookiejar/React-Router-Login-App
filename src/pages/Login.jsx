import { Button, Form, Container } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  //click button
  const submit = () => {
    const isCorrectUsername = email === "rxchong1123@gmail.com";
    const isCorrectPassword = password === "1001954867";
    if (isCorrectPassword && isCorrectUsername) {
      userContext.setToken("1234");
      navigate("/dashboard");
    }
  };

  return (
    <Container>
      <h1 className="my-3">Login to your email address</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button onClick={submit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
