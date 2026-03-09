import { createContext, useState } from "react";

export const recepecontext = createContext();

function ReceipeContext({ children }) {
  const [data, setData] = useState([]);
  console.log("context = ", data);
  return (
    <recepecontext.Provider value={{ data, setData }}>
      {children}
    </recepecontext.Provider>
  );
}

export default ReceipeContext;
