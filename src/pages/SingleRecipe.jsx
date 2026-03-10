import { recepecontext } from "@/context/ReceipeContext";
import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

function SingleRecipe() {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const { data, setData } = useContext(recepecontext);
  const recipe = data.find((r) => r.id == id);

  const {
    image,
    title,
    category,
    description,
    chef,
    ingredients,
    instructions,
  } = recipe;

  // delete recipe handler
  const handleRecipeDelete = (id) => {
    const filterdata = data.filter((r) => r.id != id);
    setData(filterdata);
    navigate("/recipes");
  };

  return (
    <div className="grid grid-cols-12 gap-[100px] w-full px-[6%] mt-10">
      {/* left side image  */}
      <div className="col-span-4 rounded-lg overflow-hidden shadow-lg shadow-black/40 hover:scale-115 duration-380 transform transition h-[230px]">
        <img src={image} alt={title} className="w-full object-fit" />
      </div>

      {/* right side detials  */}
      <div className="col-span-8 h-[60vh] shadow-[inset_0_-6px_6px_-4px_rgba(0,0,0,0.4)] border-b-2 overflow-y-auto scroll-hidden">
        <h1 className="font-bold text-5xl">{title}</h1>
        <h2 className="font-medium text-md mt-8 ">
          Chef Name : <span>{chef}</span>
        </h2>
        <h2 className="font-medium text-md mt-2 ">
          Category : <span>{category}</span>
        </h2>
        <p className="font-medium text-md mt-2 ">
          Description :{" "}
          <span className="text-sm font-light">{description}</span>
        </p>

        <div className="flex justify-between items-start w-full mt-8">
          <div className="w-1/2 ">
            <p className="text-white font-semibold  mb-5">Ingredients</p>
            <ul>
              {ingredients?.split("\n").map((ingd, i) => (
                <li key={i} className="mb-1">
                  {ingd}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-1/2">
            <p className="text-white font-semibold  mb-5">Instructions</p>
            {instructions}
          </div>
        </div>
      </div>

      <div className="col-span-8 col-start-5">
        <div className="w-full flex justify-between">
          <Button variant="secondary">
            <Link to={`/recipe/update/${id}`}>Update Recipe</Link>
          </Button>
          <Button variant="destructive" onClick={() => handleRecipeDelete(id)}>
            Delete Recipe
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SingleRecipe;
