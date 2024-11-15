import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<ContactPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
