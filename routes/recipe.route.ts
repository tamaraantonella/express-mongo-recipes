import {Router} from "express";
import {createRecipe, getRecipeById, getRecipes} from "../controllers/recipe.controller";

const router = Router();

router.post('/', createRecipe);
router.get('/', getRecipes);
router.get('/:id', getRecipeById);

export default router;