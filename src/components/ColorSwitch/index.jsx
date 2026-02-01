import { StyleContext } from "../../contexts/StyleContext";
import { useContext } from "react";
import { SC_SwitchColor } from "./styles";
import { GrCheckboxSelected } from "react-icons/gr";

const Index = () => {
  const { style, updateStyle } = useContext(StyleContext);

  const colors = [
    "lightblue",
    "cyan",
    "blue",
    "violet",
    "red",
    "coral",
    "orange",
    "gold",
    "greenyellow",
    "lime",
    "green",
    "teal",
  ];

  return (
    <>
      <h3 className="lsp-2 tac w60">Select the primary color of the site</h3>
      <SC_SwitchColor>
        {colors.map((c) => (
          <button onClick={() => updateStyle("color", c)}>
            {style.color === c ? (
              <GrCheckboxSelected
                size={15}
                color={
                  c === "green" || c === "blue" || c === "teal"
                    ? "white"
                    : undefined
                }
              />
            ) : null}
          </button>
        ))}
      </SC_SwitchColor>
    </>
  );
};

export default Index;
