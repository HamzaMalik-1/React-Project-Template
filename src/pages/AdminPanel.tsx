// src/pages/AdminPanel.tsx

import React from "react";
import { useAppSelector } from "../hooks/useTypedHooks";
import { Container, Row, Col, Card } from "react-bootstrap";

const AdminPanel = () => {
  const role = useAppSelector((state) => state.auth.role);
  const userName = "Admin User"; // You can fetch this from Redux or API in real apps

  return (
    <Container fluid>
      <h2>Welcome, {userName} 👋</h2>
      <p className="text-muted">
        You're logged in as <strong>{role}</strong>.
      </p>

      <hr />

      {/* Dashboard Cards */}
      <Row className="mt-4">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text className="display-6">123</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Pending Requests</Card.Title>
              <Card.Text className="display-6">5</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>System Status</Card.Title>
              <Card.Text className="text-success fw-bold">
                All Systems Operational
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
