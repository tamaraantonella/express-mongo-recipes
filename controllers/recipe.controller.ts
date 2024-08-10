import {getDb} from "../config/connection";
import {Request, Response} from 'express';
import {CreateRecipeDto} from "../dto/create-recipe.dto";
import {ObjectId} from "mongodb";

export const createRecipe = async (req: Request, res: Response
) => {
    const db = getDb();
    const recipe = req.body;
    const parsedRecipe = CreateRecipeDto.safeParse(recipe);
    if (!recipe || !parsedRecipe.success) {
        return res.status(400).json({message: 'Recipe is required'});
    }
    const newRecipe = await db.collection('recipes').insertOne(parsedRecipe.data);
    return res.status(201).json(newRecipe);
}

export const getRecipes = async (req: Request, res: Response) => {
    const db = getDb();
    const recipes = await db.collection('recipes').find().toArray();
    return res.status(200).json(recipes);
}

export const getRecipeById = async (req: Request, res: Response) => {
    const db = getDb();
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({message: 'Invalid id'});
    }
    const recipe = await db.collection('recipes').findOne({_id: new ObjectId(id)});
    return res.status(200).json(recipe);
}