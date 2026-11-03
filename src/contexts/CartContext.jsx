import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Suma las unidades de todas las pizzas
  const cartLength = cart.reduce((acc, pizza) => acc + pizza.quantity, 0);

  // Calcula el precio total
  const totalCarrito = cart.reduce(
    (acc, pizza) => acc + Number(pizza.price) * pizza.quantity,
    0,
  );

  // Agregar pizza o aumentar su cantidad
  const agregarCarrito = (producto) => {
    setCart((prevCart) => {
      const existe = prevCart.find((p) => p.id === producto.id);

      if (existe) {
        return prevCart.map((p) =>
          p.id === producto.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }

      return [...prevCart, { ...producto, quantity: 1 }];
    });
  };

  // Aumentar cantidad
  const sumarUno = (id) => {
    setCart((prevCart) =>
      prevCart.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p,
      ),
    );
  };

  // Disminuir cantidad y eliminar si llega a cero
  const restarUno = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0),
    );
  };

  // Eliminar una pizza completamente
  const eliminarProducto = (id) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== id));
  };

  // Vaciar carrito
  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartLength,
        totalCarrito,
        agregarCarrito,
        sumarUno,
        restarUno,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
