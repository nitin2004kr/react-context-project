import { recepecontext } from "@/context/ReceipeContext";
import React, { useContext, useEffect } from "react";
import Card from "@/UI/Card";

function FavoritesRecipes() {
  const { data } = useContext(recepecontext);

  const favrecipe = data?.filter((r) => r.fav == true);

  return (
    <div className="w-full px-[6%]">
      <div className="grid grid-cols-4 gap-8 mt-10">
        {favrecipe?.length > 0 ? (
          favrecipe.map((r, i) => (
            <div
              className="w-75 hover:scale-102 duration-300 transform transition shadow-lg shadow-zinc-900/80  rounded-b-xl oveflow-hidden"
              key={i + 1}
            >
              <Card recipe={r} />
            </div>
          ))
        ) : (
          <div className="text-center font-bold text-2xl white ">
            No Recipe Added to Favroite !
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoritesRecipes;
