import {Routes, Route} from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Reservation from "./reserve/BookingPage";
import Order from "./order/Order";
import Login from "./login/Login";
import ConfirmationPage from "./confirmation/ConfirmationPage";
import Menu from "./menu/Menu";

export default function Routing() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>

        <Route path="/reservations" element={<Reservation/>}/>

        <Route path="/order" element={<Order/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/confirmation" element={<ConfirmationPage/>}/>
      </Routes>
  );
}
