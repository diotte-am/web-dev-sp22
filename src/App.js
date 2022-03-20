import './vendors/bootstrap/bootstrap.min.css';
import './vendors/css/tuiter-bootstrap.css';
import './vendors/Font-Awesome-5.x/css/all.css';
import './vendors/css/explore.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs/index.js";
import Tuiter from "./components/Tuiter/index.js";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ExploreScreen from "./components/Tuiter/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen";



function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path={"/hello"} exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path={["/", "/labs"]} exact={true}>
                  <Labs/>
              </Route>
              <Route path={"/tuiter"} exact={true}>
                  <Tuiter/>
              </Route>
              <Route path={"/tuiter/explore"} exact={true}>
                  <ExploreScreen/>
              </Route>
              <Route path={"/tuiter/home"} exact={true}>
                  <HomeScreen/>
              </Route>



          </div>
      </BrowserRouter>


  );
}
export default App;
