import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AppRoutes from './Routes'


function App() {
  return (
    <div className="app-container">
      <Router>
        <React.Suspense fallback={"Loading..."}>
          <AppRoutes/>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
