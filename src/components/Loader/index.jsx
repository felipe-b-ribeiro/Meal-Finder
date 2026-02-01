import { GiKnifeFork } from "react-icons/gi";
import { SC_Loader} from "./styles"
import { StyleContext } from "../../contexts/StyleContext";
import { useContext } from "react";

const Index = () => {
  const { style } = useContext(StyleContext);
  return (
    <>
      <SC_Loader color={style.color}>
          <span><GiKnifeFork size={30} color={style.color} /></span>
          <h3>Loading</h3>
      </SC_Loader>
      
    </>
  )
}

export default Index