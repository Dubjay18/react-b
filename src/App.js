import React from "react";
import Space from "./components/space";
import "./App.css";
// import { Button } from "react-bootstrap";
// import Cards from "./components/card";

function App() {
  return (
    <div className="App">
      <style type="text/css">
        {`
    .btn-trans {
      background-color: transparent;
      font-weight: 600;
      
    }

    .btn-active {
      background-color: rgba(18, 28, 51, 0.05);
      font-weight: 600;
    }
    .btn-purple{
        background: rgba(18, 28, 51, 1);
        color: white;
        text-transform: uppercase;
        font-weight: 600;
    }
    .btn-circle {
      border-radius: 50%;
      background: rgba(18, 28, 51, 1);
      color: white;
      text-transform: uppercase;
      font-weight: 600;
    }
   
    `}
      </style>
      <Space />
    </div>
  );
}

export default App;
