import { useRecipeStore } from "./recipeStore";

const RecommendationList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div className="border-2 my-2 border-gray-300 p-2 rounded-md">
      <h2 className="font-bold text-lg mb-4">Recommendations</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="mb-4">
            <h3 className="font-bold text-gray-700 capitalize">
              {recipe.title}
            </h3>
            <p className="text-gray-500 text-xs">{recipe.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No recommendations yet.</p>
      )}
    </div>
  );
};

export default RecommendationList;
