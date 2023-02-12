import React, { useState, useEffect } from 'react';
import axios from 'axios'



const BASE_URL = 'https://api.edamam.com/api/recipes/v2'
const API_ID = 'fdded359'
const API_KEY = 'be59c522dfa77fc7400675f3a290b192'



type Recipe = {
  recipeName: string,
  mealType: string,
  cuisine: string, 
  ingredients: string[],
  imgLarge: string,
  imgSmall: string
}

export const useRecipes = () => {
  const [dinnerRecipe, setDinnerRecipe] = useState<Recipe>(
    {recipeName: '', mealType: '', cuisine: '', ingredients: [], imgLarge: '', imgSmall: ''}
  );
  const [breakfastRecipe, setBreakfastRecipe] = useState<Recipe>(
    {recipeName: '', mealType: '', cuisine: '', ingredients: [], imgLarge: '', imgSmall: ''}
  );
  const [randomRecipes, setRandomRecipes] = useState<Recipe[]>(
   [ {recipeName: '', mealType: '', cuisine: '', ingredients: [], imgLarge: '', imgSmall: ''}]
  );

  useEffect(() => {
    const fetchDinnerRecipes = async () => {
      const response = await axios.get(`${BASE_URL}?type=public&app_id=${API_ID}&app_key=${API_KEY}&mealType=Dinner&dishType=Main%20course&random=true`, {})
      const recipe = response.data.hits[0].recipe
      setDinnerRecipe({recipeName: recipe.label, cuisine: recipe.cuisineType, mealType: recipe.mealType, 
      ingredients: recipe.ingredientLines, imgLarge: recipe.images.REGULAR.url, imgSmall: recipe.images.SMALL.url })


    }
    fetchDinnerRecipes();
  }, [])

  return {
    dinnerRecipe,
    
  };
};