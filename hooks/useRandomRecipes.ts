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

 export const useRandomRecipes = () => {

  const [randomRecipes, setRandomRecipes] = useState<Recipe[]>(
    [ ]
   );


  useEffect(() => {

    const fetchRandomRecipes = async () => {
      const response = await axios.get(`${BASE_URL}?type=public&app_id=${API_ID}&app_key=${API_KEY}&mealType=Dinner&mealType=Lunch&dishType=Main%20course&random=true`, {})
      for (let index = 0; index < 5; index++) {
      const recipe = response.data.hits[index].recipe
      setRandomRecipes(randomRecipes => [...randomRecipes, {recipeName: recipe.label, cuisine: recipe.cuisineType, mealType: recipe.mealType, 
      ingredients: recipe.ingredientLines, imgLarge: recipe.images.REGULAR.url, imgSmall: recipe.images.SMALL.url }])
    }      
      }
    fetchRandomRecipes();
   
  }, [])

  return {
    randomRecipes
  };

}
