import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recepies from "../pages/Recepies";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import CreateRecepies from "../pages/CreateRecepies";
import SingleRecipe from "@/pages/SingleRecipe";
import FavoritesRecipes from "@/pages/FavoritesRecipes";

const Mainroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recepies />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-recepies" element={<CreateRecepies />} />
        <Route path="/recipes/details/:id" element={<SingleRecipe />} />
        <Route path="/recipe/:mode/:id" element={<CreateRecepies />} />
        <Route path="/recipe/favorites" element={<FavoritesRecipes />} />
      </Routes>
    </>
  );
};

export default Mainroutes;
