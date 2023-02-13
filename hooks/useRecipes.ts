import React, { useState, useEffect } from 'react';
import axios from 'axios'






export type Recipe = {
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

    const fetchRandomRecipes = async () => {
      const response = await axios.get(`${BASE_URL}?type=public&app_id=${API_ID}&app_key=${API_KEY}&random=true`, {})

      for (let index = 0; index < 5; index++) {
        const recipe = response.data.hits[index].recipe
        setRandomRecipes(randomRecipes => [...randomRecipes, {recipeName: recipe.label, cuisine: recipe.cuisineType, mealType: recipe.mealType, 
        ingredients: recipe.ingredientLines, imgLarge: recipe.images.REGULAR.url, imgSmall: recipe.images.SMALL.url }])
     }      
    }
    fetchDinnerRecipes();
    fetchRandomRecipes()
  }, [])

  return {
    dinnerRecipe,
    breakfastRecipe,
    randomRecipes
    
  };
};