// components/RecipeInfo.tsx
import { Recipe } from "@/types/recipe";
import "../styles/globals.css";
import Link from "next/link";

interface RecipeInfoProps {
  recipe: Recipe;
  relatedRecipes: Recipe[];
}

const RecipeInfo = ({ recipe, relatedRecipes }: RecipeInfoProps) => {
  const ingredients = Array.from(
    { length: 20 },
    (_, i) => recipe[`strIngredient${i + 1}`],
  ).filter((ingredient) => ingredient);

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:w-2/3 space-y-8">
        <div className="flex items-center space-x-6">
          <img
            className="w-32 h-32 object-cover rounded-md"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
          <div>
            <h1 className="text-4xl font-semibold text-gray-800">
              {recipe.strMeal}
            </h1>
            <Link
              href={`/recipes?filter=country&value=${recipe.strArea}`}
              className="text-lg text-blue-600 hover:underline"
            >
              {recipe.strArea}
            </Link>
          </div>
        </div>

        <div className="text-lg text-gray-700">
          <h2 className="font-semibold text-xl mb-4">Instructions</h2>
          <p>{recipe.strInstructions}</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="text-lg text-blue-600 hover:underline cursor-pointer"
              >
                <Link href={`/recipes?filter=ingredient&value=${ingredient}`}>
                  {ingredient}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lg:w-1/3 space-y-8">
        <div className="sticky top-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Other Recipes in {recipe.strCategory}
          </h2>
          <ul className="space-y-4">
            {relatedRecipes.map((relatedRecipe) => (
              <li
                key={relatedRecipe.idMeal}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link
                  href={`/recipe/${relatedRecipe.idMeal}`}
                  className="block p-4 text-center"
                >
                  <img
                    className="w-full h-36 object-cover rounded-md mb-4"
                    src={relatedRecipe.strMealThumb}
                    alt={relatedRecipe.strMeal}
                  />
                  <h3 className="text-lg font-semibold text-gray-700">
                    {relatedRecipe.strMeal}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
