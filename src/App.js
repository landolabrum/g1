import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import NavigationBar from "./components/nav/navbar";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container className="mt-3">
        <Router />
      </Container>
    </BrowserRouter>
  );
}

export default App;
