import express from 'express';
import {
  getAvailableRecipes,
  getRecipeInfo,
} from '../controllers/recipe.controller';

const router = express.Router();

router.get('/', getAvailableRecipes); // Filtered recipe list
router.get('/:id', getRecipeInfo); // Get recipe details by id

export default router;
