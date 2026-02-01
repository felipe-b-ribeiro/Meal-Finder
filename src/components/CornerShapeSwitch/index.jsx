import { StyleContext } from "../../contexts/StyleContext";
import { useContext } from "react";
import { SC_SwitchShape } from "./styles";

const Index = () => {
  const { style, updateStyle } = useContext(StyleContext);

  return (
    <>
      <h2>Select the shape of meals</h2>
      <SC_SwitchShape color={style.color} corner={style.corner}>
        <button onClick={() => updateStyle("corner","bevel")}>
          <div></div>
          bevel
        </button>
        <button onClick={() => updateStyle("corner","notch")}>
          <div></div>
          notch
        </button>
        <button onClick={() => updateStyle("corner","scoop")}>
          <div></div>
          scoop
        </button>
      </SC_SwitchShape>
    </>
  );
};

export default Index;
