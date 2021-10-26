import React, { createContext, useState ,useContext} from "react";

const ContextoParaElLink = createContext();
const ContextoParaActualizarElLink = createContext();

export const useLink = () => {
    return useContext(ContextoParaElLink);
}

export const useActualizarLink = () => {
    return useContext(ContextoParaElLink);
}

export const ProveedorDeTemaLink = ({ children }) => {
  const [esLink, setEsLink] = useState(false);

  const cambiarValorLink = () => {
    setEsLink((esLink) => !esLink);
  };

  return (
    <ContextoParaElLink.Provider value={esLink}>
      <ContextoParaActualizarElLink.Provider value={cambiarValorLink}>
        {children}
      </ContextoParaActualizarElLink.Provider>
    </ContextoParaElLink.Provider>
  );
};
