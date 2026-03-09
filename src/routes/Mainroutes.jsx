import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recepies from "../pages/Recepies";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import CreateRecepies from "../pages/CreateRecepies";

const Mainroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recepies" element={<Recepies />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-recepies" element={<CreateRecepies />} />
      </Routes>
    </>
  );
};

export default Mainroutes;
