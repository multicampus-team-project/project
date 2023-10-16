import React from "react";
import Home from "./pages/Home.js";
import Error404 from "./pages/Error404.js";
import Reservation from "./ReservationInfo/Reservation.js";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div id="wrap">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reservation/:mt20id" element={<Reservation />} />
        <Route path="" element={<></>}></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}
