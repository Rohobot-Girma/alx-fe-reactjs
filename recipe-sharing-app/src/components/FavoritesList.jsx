import React, { useMemo } from "react";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const favoriteRecipes = useMemo(() => {
    return favorites.map((id) => recipes.find((recipe) => recipe.id === id));
  }, [favorites, recipes]);

  console.log("Favorite Recipes:", favoriteRecipes); // Debugging

  return (
    <div className="border-2 my-2 border-gray-300 p-2 rounded-md">
      <h2 className="font-bold text-lg mb-4">My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="mb-4">
            <h3 className="font-bold text-gray-700 capitalize">
              {recipe.title}
            </h3>
            <p className="text-gray-500 text-xs">{recipe.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No favorites yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
