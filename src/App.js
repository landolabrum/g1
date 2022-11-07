import React from "react";
import "./styles/App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Router from "./router";
import NavigationBar from "./components/nav/navbar";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Container className="mt-3">
        <Router />
      </Container>
    </HashRouter>
  );
}

export default App;
