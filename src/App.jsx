import { Routes, Route } from "react-router-dom";
import Pizzas from "./View/Pizzas";
import Registro from "./View/Registro";
import Login from "./View/Login";
import Cart from "./View/Cart";
import Home from "./View/Home";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Pizzas" element={<Pizzas />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
