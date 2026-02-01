import { SC_Aside } from "./styles";
import Copyright from '../Copyright';
import CornerShapeSwitch from "../CornerShapeSwitch";
import ColorSwitch from '../ColorSwitch';
import SearchBar from "../SearchBar";

const Index = ({mealData, mealLoad, length, setSearchTerm, ...props}) => {
  return (
    <SC_Aside {...props}>
      <div>
        {mealData.length > 0 && !mealLoad && (
          <>
            <h1>Showing {length} meals</h1>
            <SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
            <hr />
            <CornerShapeSwitch />
            <hr />
            <ColorSwitch />
          </>
        )}
        <Copyright />
      </div>
    </SC_Aside>
  );
};

export default Index;
