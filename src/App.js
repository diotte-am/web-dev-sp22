import './vendors/bootstrap/bootstrap.min.css';
import './vendors/css/tuiter-bootstrap.css';
import './vendors/Font-Awesome-5.x/css/all.css';
import './vendors/css/explore.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs/index.js";
import Tuiter from "./components/Tuiter/index.js";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreScreen from "./components/Tuiter/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen";



function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<Labs />} />
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                              >
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>

                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
