import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationList from "./components/RecommendationList";

function App() {
  return (
    <Router>
      <div className="flex flex-row justify-center items-center h-screen gap-24">
        <div className="flex flex-col gap-4">
          <SearchBar />
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          </Routes>
          <FavoritesList />
          <RecommendationList />
        </div>
        <AddRecipeForm />
      </div>
    </Router>
  );
}

export default App;
