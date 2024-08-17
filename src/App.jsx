import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
