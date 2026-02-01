import { useState } from "react";
import useCategMeals from "../../hooks/useCategMeals";
import { SC_Header, SC_Main, SC_MealsGrid, SC_PageWrapper } from "./styles";
import Button from "../../components/Button";
import icons from "../../constants/homeIcons";
import Loader from "../../components/Loader";
import Logo from "../../components/Logo";
import MealCard from "../../components/MealCard";
import NoneMeals from "../../components/NoneMeals";
import AsideBar from "../../components/AsideBar";
import { IoMenuSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

const Home = () => {
  const [categAtual, setCategAtual] = useState("Beef");

  const [categData, categLoad, categError] = useCategMeals(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
  );

  const [mealData, mealLoad, mealError] = useCategMeals(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categAtual}`,
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const visibleData = mealData
    ? mealData.filter((m) =>
        m.strMeal.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  const isMobile = window.innerWidth <= 768;

  const handleCateg = (category) => {
    setCategAtual(category);
    setSearchTerm("");
  };

  if (categLoad) return <Loader />;
  if (mealError || categError)
    return <h1>Erro inesperado no servidor - 500</h1>;

  return (
    <>
      <SC_Header>
        {isMobile && (
          <button
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            className="menu-btn"
          >
            <IoMenuSharp size={30} />
          </button>
        )}
        <Logo />
        <nav>
          {categData.map(({ strCategory }) => (
            <Button
              onClick={() => handleCateg(strCategory)}
              key={strCategory}
              selected={strCategory === categAtual}
            >
              {icons[strCategory]}
              {strCategory}
            </Button>
          ))}
        </nav>
      </SC_Header>
      <hr />
      <SC_PageWrapper>
        <AsideBar
          mealData={mealData}
          mealLoad={mealLoad}
          setSearchTerm={setSearchTerm}
          length={visibleData.length}
          className={isSideBarOpen ? "open" : undefined}
        />
        <SC_Main onClick={isSideBarOpen ? () => setIsSideBarOpen(!isSideBarOpen) : undefined}>
          {mealLoad && <Loader />}
          {visibleData.length === 0 && <NoneMeals searchTerm={searchTerm} />}
          <SC_MealsGrid>
            {mealData.length > 0 &&
              !mealLoad &&
              visibleData.map(({ strMeal, strMealThumb, idMeal }) => (
                <MealCard
                  strMeal={strMeal}
                  strMealThumb={strMealThumb}
                  key={idMeal}
                />
              ))}
          </SC_MealsGrid>
        </SC_Main>
      </SC_PageWrapper>
    </>
  );
};

export default Home;
