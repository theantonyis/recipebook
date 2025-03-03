import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import RecipeInfo from "../../components/RecipeInfo";
import { Recipe } from "@/types/recipe";

const RecipeInfoPage = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [relatedRecipes, setRelatedRecipes] = useState<Recipe[]>([]);
  const router = useRouter(); // Hook to access router object
  const { id } = router.query; // Get the `id` from the URL query parameters

  useEffect(() => {
    console.log("Recipe ID:", id);
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/recipes/${id}`);
        console.log("Fetched Recipe:", res.data); // Log the full response to check structure
          if (res.data.meals && res.data.meals[0]) {
              const fetchedRecipe = res.data.meals[0];
              setRecipe(fetchedRecipe);

              const category = fetchedRecipe.strCategory;
              const relatedRes = await axios.get(
                  `http://localhost:5000/api/recipes?filter=category&value=${category}` // Another backend API call
              );
              setRelatedRecipes(relatedRes.data.meals || []);
          } else {
              console.error("Invalid recipe data:", res.data);
          }
      } catch (error) {
          console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return <RecipeInfo recipe={recipe} relatedRecipes={relatedRecipes} />;
};

export default RecipeInfoPage;
