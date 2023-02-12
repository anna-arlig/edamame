import React, { useState, useEffect } from 'react';
import axios from 'axios'




type Ingredients = {

}

type Recipe = {
  recipeName: string,
  mealType: string,
  cuiusine: string, 
  ingredients: Ingredients,

}

export const useRecipes = () => {
  const [dinnerRecipe, setDinnerRecipe] = useState<Recipe>(
    {recipeName: '', mealType: '', cuiusine: '', ingredients: {}}
  );
  const [breakfastRecipe, setBreakfastRecipe] = useState<Recipe>(
    {recipeName: '', mealType: '', cuiusine: '', ingredients: {}}
  );

  useEffect(() => {
    const fetchDinnerRecipes = async () => {
    

const response = await axios.get(BASE_URL, {})
setDinnerRecipe({recipeName: response.data.hits[0].recipe.label, cuiusine: response.data.hits[0].recipe.cuisineType, mealType: response.data.hits[0].recipe.mealType, ingredients: {} })


    }
    fetchDinnerRecipes();
  }, [])

  return {
    dinnerRecipe,
    
  };
};