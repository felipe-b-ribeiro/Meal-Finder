import { SC_NoneMeals } from "./styles";
import { FaFaceSadCry } from 'react-icons/fa6'
import { StyleContext } from "../../contexts/StyleContext";
import { useContext } from "react";

const Index = ({searchTerm}) => {
  const { style } = useContext(StyleContext);
  return (
    <SC_NoneMeals>
        <FaFaceSadCry size={60} color={style.color} />
        <span>None meals founded with "{searchTerm}"</span>
    </SC_NoneMeals>
  )
}

export default Index