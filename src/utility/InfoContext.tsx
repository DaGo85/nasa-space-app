// Context for darkmode

import React, { useContext, useEffect, useState, createContext } from "react";
import { Props } from "../../ts/interfaces/global_interfaces";

// Creates Context
type InfoState = boolean;
interface InfoContextI {
  showModal: boolean;
  setShowModal: (arg0: InfoState) => void;
}

const InfoContext = createContext<InfoContextI>({} as InfoContextI);

// Context Provider

const InfoProvider: React.FC<Props> = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <InfoContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </InfoContext.Provider>
  );
};

// Custom hook for consuming Context

const useInfoContext = () => {
  return useContext(InfoContext);
};

export { InfoContext, InfoProvider, useInfoContext };
