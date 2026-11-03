import { createContext, useState } from "react";
//Paso 1: Crear el contexto con el createContext dandole el nombre que quedamos en este caso ContadorContext
export const ContadorContext = createContext();

const ContadorProvider = ({ children }) => {
  //Paso 2:aqui va TODA la info que quiera compartir con los demas componentes de forma global
  let nombre = "willmor";
  const [cuenta, setCuenta] = useState(0);
  function test() {
    console.log("test");
  }
  return (
    //Paso 3: en value, pasamos todos los valores que queremos compartir con los demas componentes
    <ContadorContext.Provider value={{ nombre, cuenta, setCuenta, test }}>
      {children}
    </ContadorContext.Provider>
  );
};
export default ContadorProvider;
