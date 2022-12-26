import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import SignUp from "./page/SigUp";
import Todo from "./page/Todo";
const AppRouter = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        {/* <Route path="/" element={<SignUp />} /> */}
        <Route path="/" element={<Todo />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
