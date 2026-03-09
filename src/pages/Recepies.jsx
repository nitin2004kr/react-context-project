import React, { useContext } from "react";
import { recepecontext } from "../context/ReceipeContext";

function Recepies() {
  const { data } = useContext(recepecontext);
  console.log("get data = ", data);
  return (
    <div>
      <div className="grid grid-col-3 gap-4">
        {data?.length > 0 ? (
          <div className="">

          </div>
        ) : (
          <div className="text-center font-bold text-2xl white">
            No Recipe Created Yet!
          </div>
        )}
      </div>
    </div>
  );
}

export default Recepies;
