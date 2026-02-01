import { StyleContext } from "../../contexts/StyleContext";
import { SC_Button } from "./styles";
import { useContext } from "react";

const Index = ({ onClick, children, type, selected }) => {
  const { style } = useContext(StyleContext);

  return (
    <SC_Button
      className={selected ? "selected" : ""}
      onClick={onClick}
      type={type}
      color={style.color}
    >
      {children}
    </SC_Button>
  );
};

export default Index;
