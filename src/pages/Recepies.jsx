import React, { useContext } from "react";
import { recepecontext } from "../context/ReceipeContext";
import Card from "@/UI/Card";

function Recepies() {
  const { data } = useContext(recepecontext);
  return (
    <div className="w-full px-[6%]">
      <div className="grid grid-cols-4 gap-8 mt-10">
        {data?.length > 0 ? (
          data.map((r, i) => (
            <div
              className="w-75 hover:scale-102 duration-300 transform transition shadow-lg shadow-zinc-900/80  rounded-b-xl oveflow-hidden"
              key={i + 1}
            >
              <Card recipe={r} />
            </div>
          ))
        ) : (
          <div className="text-center font-bold text-2xl white">
            No Recipe Created Yet !
          </div>
        )}
      </div>
    </div>
  );
}

export default Recepies;
