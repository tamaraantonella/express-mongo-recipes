import {z} from "zod";
import {RecipeCategoryEnum} from "../models/recipes.model";

export const CreateRecipeDto = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(3).max(500).nullable().default(null),
    ingredients: z.array(z.object({
        name: z.string().min(3).max(100),
        quantity: z.number().min(0),
        unit: z.string().min(1).max(10),
    })),
    category: z.nativeEnum(RecipeCategoryEnum),
});