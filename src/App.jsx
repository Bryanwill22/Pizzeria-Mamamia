import { Routes, Route, Navigate } from "react-router-dom";
import Pizzas from "./View/Pizzas";
import Registro from "./View/Registro";
import Login from "./View/Login";
import Cart from "./View/Cart";
import Home from "./View/Home";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Detalle from "./View/Detalle";
import { useContext } from "react";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  const { token } = useContext(GlobalContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Registro" element={<Registro />} />
        <Route
          path="/Login"
          element={token === true ? <Navigate to="/Home" /> : <Login />}
        />
        <Route
          path="/Cart"
          element={token === true ? <Cart /> : <Navigate to="/Login" />}
        />
        <Route path="/Pizzas" element={<Pizzas />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;
