import { Card, Container } from "react-bootstrap";

export default function Dashboard() {
  return (
    <Container>
      <h1 class="my-3">Dashboard</h1>
      <Card>
        <Card.Body>
          <Card.Title>Sigma School Analytics</Card.Title>
          <Card.Text>People who graduate who get jobs: 80%</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
