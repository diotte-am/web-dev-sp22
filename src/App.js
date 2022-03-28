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
import ProfileScreen from "./components/Tuiter/ProfileScreen";
import EditProfile from "./components/Tuiter/EditProfile";

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
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen active={"home"}/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen active={"explore"}/>}/>
                            <Route path="profile"
                                   element={<ProfileScreen active={"profile"}/>}/>
                            <Route path="editProfile"
                                   element={<EditProfile active={"editProfile"}/>}/>
                        </Route>

                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
