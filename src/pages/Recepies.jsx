import React, { useContext } from "react";
import { recepecontext } from "../context/ReceipeContext";
import Card from "@/UI/Card";

function Recepies() {
  const { data } = useContext(recepecontext);
  console.log("get data = ", data);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {data?.length > 0 ? (
          data.map((r, i) => (
            <div className="w-75" key={i + 1}>
              <Card recipe={r}  />
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
