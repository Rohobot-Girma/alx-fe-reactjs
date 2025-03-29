import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div className="overflow-y-scroll p-8 h-100">
      {displayedRecipes.map((recipe) => (
        <div
          className="border-2 my-2 border-gray-300 p-2 rounded-md"
          key={recipe.id}
        >
          <h3 className="font-bold text-gray-700 capitalize mb-0.5">
            {recipe.title}
          </h3>
          <p className="text-gray-500 text-xs">{recipe.description}</p>
          <div className="flex gap-2 mt-2">
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-xs bg-blue-700 text-white p-1 rounded-sm hover:bg-blue-600"
            >
              View Details
            </Link>
            <button
              onClick={() =>
                favorites.includes(recipe.id)
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
              className={`text-xs ${
                favorites.includes(recipe.id) ? "bg-red-500" : "bg-green-500"
              } text-white p-1 rounded-sm hover:bg-opacity-80`}
            >
              {favorites.includes(recipe.id)
                ? "Remove Favorite"
                : "Add Favorite"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
