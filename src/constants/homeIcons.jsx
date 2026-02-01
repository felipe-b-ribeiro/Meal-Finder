import { LuBeef, LuDessert, LuVegan } from "react-icons/lu";
import { MdFreeBreakfast } from "react-icons/md";
import { LiaFontAwesomeAlt } from "react-icons/lia";
import { GiRoastChicken,
     GiGoat,
     GiPerspectiveDiceSixFacesRandom,
     GiNoodles,
     GiMeat,
     GiShrimp,
     GiMeal, 
     GiTomato    } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";

const icons = {
    Beef: <LuBeef size={20} />,
    Breakfast:  <MdFreeBreakfast size={20} />,
    Chicken: <GiRoastChicken size={20}/>,
    Dessert: <LuDessert size={20}/>,
    Goat: <GiGoat />,
    Lamb: <TbMeat />,
    Miscellaneous: <GiPerspectiveDiceSixFacesRandom size={20}/>,
    Pasta: <GiNoodles size={20}/>,
    Pork: <GiMeat size={20}/>,
    Seafood: <GiShrimp  size={20}/>,
    Side: <GiMeal size={20}/>,
    Starter: <LiaFontAwesomeAlt size={20}/>,
    Vegan: <LuVegan size={20}/>,
    Vegetarian: <GiTomato size={20}/>
}

export default icons;