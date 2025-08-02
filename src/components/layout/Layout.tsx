// src/components/layout/Layout.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container fluid className="min-vh-100 d-flex flex-column px-0">
      {/* 🔝 Header */}
      <Row className="flex-shrink-0">
        <Col className="px-0">
          <Header />
        </Col>
      </Row>

      {/* 📚 Sidebar + Main Content */}
      <Row className="flex-grow-1 flex-nowrap">
        {/* 📌 Sidebar */}
        <Col xs="auto" className="bg-light border-end px-0">
          <Sidebar />
        </Col>

        {/* 📄 Main Content */}
        <Col className="p-4 overflow-auto">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
