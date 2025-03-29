import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function DeleteRecipeButton({ recipeId, onDelete }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  function handleRecipeButton(e) {
    e.preventDefault();
    deleteRecipe(recipeId);
    if (onDelete) {
      onDelete();
    } else {
      navigate("/");
    }
  }
  return (
    <button
      className="bg-red-500 cursor-pointer p-2 mt-2 text-xs rounded-sm font-bold text-gray-100 hover:bg-red-400"
      onClick={handleRecipeButton}
    >
      Delete
    </button>
  );
}
