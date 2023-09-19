import React from "react";
import { Reset } from "styled-reset";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
function App() {
  return (
    <React.Fragment>
      <Reset />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/write" element={<Write />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
