import React, { FC, useEffect, useState } from 'react'
import * as S from './styled'
import { Recipe, useSingleRecipe } from '../../hooks/useSingleRecipe'
import RecipeCard from '../RecipeCard/RecipeCard'
import { ScrollView } from 'react-native'

const RecipeCardList: FC = () => {
  const [dinnerRecipe, setDinnerRecipe] = useState<Recipe>()

  return <S.RecipeCategoryContainer></S.RecipeCategoryContainer>
}

export default RecipeCardList
