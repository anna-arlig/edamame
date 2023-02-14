import  { useState, useEffect } from 'react';
import axios from 'axios'


const BASE_URL = 'https://api.edamam.com/api/recipes/v2'
const API_ID = 'fdded359'
const API_KEY = '83d6f8b9a0fee870fc2c15faae05d579'


export type Recipe = {
  recipeName: string,
  mealType: string,
  cuisine: string, 
  ingredients: string[],
  imgLarge: string,
  imgSmall: string
}

export const useSingleRecipe = (mealType: string) => {
  const [recipe, setRecipe] = useState<Recipe>(
    {recipeName: '', mealType: '', cuisine: '', ingredients: [], imgLarge: '', imgSmall: ''}
  );



  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(`${BASE_URL}?type=public&app_id=${API_ID}&app_key=${API_KEY}&mealType=${mealType}&dishType=Main%20course&random=true`, {})
      const recipe = response.data.hits[0].recipe
      setRecipe({recipeName: recipe.label, cuisine: recipe.cuisineType, mealType: recipe.mealType, 
      ingredients: recipe.ingredientLines, imgLarge: recipe.images.REGULAR.url, imgSmall: recipe.images.SMALL.url })
    }

    fetchRecipes();
   
  }, [])

 

  return {
    recipe,  
  };
};