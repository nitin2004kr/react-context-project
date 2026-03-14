import { createContext, useEffect, useState } from "react";

export const recepecontext = createContext();

function ReceipeContext({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  return (
    <recepecontext.Provider value={{ data, setData }}>
      {children}
    </recepecontext.Provider>
  );
}

export default ReceipeContext;
