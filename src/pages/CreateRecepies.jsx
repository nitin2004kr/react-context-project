import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recepecontext } from "../context/ReceipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateRecepies() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { data, setData } = useContext(recepecontext);

  const submitHandler = (recepe) => {
    recepe.id = nanoid();

    setData([...data, recepe]);
    toast.success("New Recipe Added!", {
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      className: "w-48 min-h-[20px]",
    });
    navigate('/recipes');
    reset();
  };

  return (
    <div className="w-full px-[20%]">
      <h1 className="text-center font-semibold text-2xl ">Create Recepe</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        {/* url field  */}
        <div className="flex flex-col ">
          <input
            type="url"
            {...register("image")}
            placeholder="Put Url of Dish"
            className="border-b py-3 outline-0"
          />
          <small className="text-red-400 text-xs pt-1">This is error</small>
        </div>

        {/* title  */}
        <div className="flex flex-col mt-1">
          <input
            type="text"
            {...register("title")}
            placeholder="Title"
            className="border-b py-3 outline-0"
          />
          <small className="text-red-400 text-xs pt-1">This is error</small>
        </div>

        {/* chef name  */}
        <div className="flex flex-col mt-1">
          <input
            type="text"
            {...register("chef")}
            placeholder="Chef Name"
            className="border-b py-3 outline-0"
          />
          <small className="text-red-400 text-xs pt-1">This is error</small>
        </div>

        {/* description  */}
        <div className="flex flex-col mt-1">
          <textarea
            {...register("description")}
            placeholder="Write description here"
            className="border-b py-3 outline-0"
          />
          <small className="text-red-400 text-xs pt-1">This is error</small>
        </div>

        {/* ingredients  */}
        <div className="flex flex-col mt-1">
          <textarea
            {...register("ingredients")}
            placeholder="Write ingredients here"
            className="border-b py-3 outline-0"
          />
          <small className="text-red-400 text-xs pt-1">This is error</small>
        </div>

        {/* instructions  */}
        <div className="flex flex-col mt-1">
          <textarea
            {...register("instructions")}
            placeholder="Write instructions here"
            className="border-b py-3 outline-0"
          />
        </div>

        {/* categoyr  */}
        <div className="flex flex-col mt-1">
          <select {...register("category")} className="border-b py-3 outline-0">
            <option value={"Veg"} className="text-black">
              Veg
            </option>
            <option value={"Non-Veg"} className="text-black">
              Non-Veg
            </option>
            <option value={"Fast Food"} className="text-black">
              Fast Food
            </option>
          </select>
          <small className="text-red-400 text-xs pt-1">This is error</small>
        </div>

        {/* save button  */}
        <button className="px-4 py-2 bg-zinc-900 mt-4 rounded-sm">
          Save Recipe
        </button>
      </form>
    </div>
  );
}

export default CreateRecepies;
