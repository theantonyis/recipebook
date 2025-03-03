import { useState, useEffect } from "react";
import axios from "axios";
import RecipeList from "../components/RecipeList";
import { Recipe } from "@/types/recipe";

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get<{ meals: Recipe[] }>(
          "http://localhost:5000/api/recipes",
          {
            params: { filter: "search", value: "" },
          },
        );

        if (res.data.meals) {
          setRecipes(res.data.meals);
        } else {
          console.warn("No recipes found.");
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return <RecipeList recipes={recipes} />;
};

export default RecipeListPage;
