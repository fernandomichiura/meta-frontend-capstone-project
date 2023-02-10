import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Reservation from "./pages/Reservation/Reservation";

const RouterRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Reservation />} path="/reservation" />
        <Route path="" element={<Navigate to="/" />}
      />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterRoutes;
