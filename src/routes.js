import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import BookingFormSuccess from "./pages/BookingFormSuccess/BookingFormSuccess";

const RouterRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Booking />} path="/reservation" />
        <Route element={<BookingFormSuccess />} path="/reservation-success" />
        <Route path="" element={<Navigate to="/" />}
      />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterRoutes;
