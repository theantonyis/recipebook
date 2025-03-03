// components/RecipeList.tsx
import { Recipe } from "@/types/recipe";
import "../styles/globals.css";
import Link from "next/link";

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        All Recipes
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <li
            key={recipe.idMeal}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <Link
              href={`/recipe/${recipe.idMeal}`}
              className="block p-4 text-center"
            >
              <img
                className="w-full h-48 object-cover rounded-md mb-4"
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />
              <h2 className="text-xl font-semibold text-gray-700">
                {recipe.strMeal}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
