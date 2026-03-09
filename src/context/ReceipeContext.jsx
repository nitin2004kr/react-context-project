import { createContext, useState } from "react";

export const recepecontext = createContext();

function ReceipeContext({ children }) {
  const [data, setData] = useState([
    {
      image:
        "https://preview.redd.it/paneer-ki-sabzi-delicious-paneer-masala-recipe-v0-sptqvdgbv2na1.jpg?auto=webp&s=eb47469c6b32a1192c83cd46c1fd54b1aed38c17",
      title: "Paneer",
      chef: "Ranveer barar",
      description: "This is Panner Recipe",
      ingredients: "1. Paneer\n2. Masala\n3. Fry",
      instructions: "First fry the panner, Then mix the spices",
      category: "Veg",
      id: "0101",
    },
  ]);
  return (
    <recepecontext.Provider value={{ data, setData }}>
      {children}
    </recepecontext.Provider>
  );
}

export default ReceipeContext;
