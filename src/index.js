import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UniversalStyle from "./components/UniversalStyle";
import App from "./App";
import Home from "./pages/Home";
import PickDestination from "./pages/PickDestination";
import Crew from "./pages/Crew";


ReactDOM.render(
  <BrowserRouter>
    <UniversalStyle />
    <Routes>
        <Route path="/" element={<App/>}>
            <Route index element={<Crew/>}/>
            <Route path="/destination" element={<PickDestination/>}/>
            <Route path="/crew" element={<Crew/>}/>
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
