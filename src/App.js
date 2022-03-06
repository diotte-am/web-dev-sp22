import './vendors/bootstrap/bootstrap.min.css';
import './vendors/css/tuiter-bootstrap.css';
import './vendors/Font-Awesome-5.x/css/all.css';
import './vendors/css/explore.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import React from "react";



function App() {
  return (
      <div className="container">
        <HelloWorld/>
          <Labs/>
          <Tuiter/>
      </div>

  );
}
export default App;
