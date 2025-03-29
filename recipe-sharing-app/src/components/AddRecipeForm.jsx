import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!title || !description) {
      alert("Title and description cannot be empty");
      return;
    }
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
    navigate("/");
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Your Title"
        className="border-1 border-gray-300 inline-block p-2 rounded-md text-center"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border-gray-200 border-1 rounded-md p-8 "
      />
      <button
        className="bg-amber-600 p-2 hover:bg-amber-500 cursor-pointer font-bold text-gray-100 rounded-lg hover:bg-amber-200 hover:text-gray-600"
        type="submit"
      >
        Add Recipe
      </button>
    </form>
  );
}
