export type Recipe = {
    _id: string;
    title: string;
    description: string | null;
    ingredients: Ingredient[];
    category: RecipeCategoryEnum;
}

export enum RecipeCategoryEnum {
    Breakfast = 'breakfast',
    Lunch = 'lunch',
    Dinner = 'dinner',
    Snack = 'snack',
    Dessert = 'dessert'
}

type Ingredient = {
    name: string;
    quantity: number;
    unit: string;
}