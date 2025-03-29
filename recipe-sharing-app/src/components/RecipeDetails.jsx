import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );

  if (!recipe) return <p className="text-red-500">Recipe not found</p>;

  const handleUpdateSuccess = () => {
    navigate("/");
  };

  return (
    <div className="border-2 my-2 text-center border-gray-300 p-2 rounded-md">
      <div className="p-2 border-1 border-gray-500 mb-4">
        <h1 className="font-bold capitalize">{recipe.title}</h1>
        <p className="text-xs mt-2">{recipe.description}</p>
      </div>
      <EditRecipeForm recipe={recipe} onSuccess={handleUpdateSuccess} />
      <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate("/")} />
    </div>
  );
}
