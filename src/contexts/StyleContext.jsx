import { useState, createContext } from "react";

const StyleContext = createContext();

const { Provider } = StyleContext;

const StyleProvider = ({ children }) => {
  const [style, setStyle] = useState({ corner: "bevel", color: "lightblue" });

  const updateStyle = (key, value) => {
    setStyle(prev => ({...prev, [key]: value}));
  };

  return <Provider value={{ style, updateStyle }}>{children}</Provider>;
};

export { StyleContext, StyleProvider };
