import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Reservation from "./pages/Reservation/Reservation";
import ReservationSuccess from "./pages/ReservationSuccess/ReservationSuccess";

const RouterRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Reservation />} path="/reservation" />
        <Route element={<ReservationSuccess />} path="/reservation-success" />
        <Route path="" element={<Navigate to="/" />}
      />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterRoutes;
