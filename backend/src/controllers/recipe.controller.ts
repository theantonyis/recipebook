import { Request, Response } from 'express';
import { getRecipes, getRecipeDetails } from '../services/recipe.service';

export const getAvailableRecipes = async (req: Request, res: Response) => {
  const { filter, value } = req.query;
  try {
    const recipes = await getRecipes(filter as string, value as string);
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error); // Detailed logging for debugging
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).send({ message: errorMessage });
  }
};

export const getRecipeInfo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const recipe = await getRecipeDetails(id);
    res.json(recipe);
  } catch (error) {
    console.error('Error fetching recipe details:', error); // Log the error to the console
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).send({ message: errorMessage });
  }
};
