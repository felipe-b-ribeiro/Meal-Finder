import { IoFastFood } from "react-icons/io5";
import { SC_Logo } from "./styles";
import { StyleContext } from "../../contexts/StyleContext";
import { useContext } from "react";

const Index = () => {
  const { style } = useContext(StyleContext);
  return (
    <a onClick={() => window.location.reload()}>
      <SC_Logo color={style.color}>
        <IoFastFood /> Meal Finder
      </SC_Logo>
    </a>
  );
};

export default Index;
