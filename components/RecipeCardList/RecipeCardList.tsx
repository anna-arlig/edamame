import React, { FC, useEffect } from 'react'
import * as S from './styled'
import { useRandomRecipes } from '../../hooks/useRandomRecipes'
import RecipeCard from '../RecipeCard/RecipeCard'
import { ScrollView } from 'react-native'

const RecipeCardList: FC = () => {
  const { randomRecipes } = useRandomRecipes()

  return (
    <S.RecipeListContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {randomRecipes.map(recipe => (
          <RecipeCard recipe={recipe} key={recipe.recipeName}></RecipeCard>
        ))}
      </ScrollView>
    </S.RecipeListContainer>
  )
}

export default RecipeCardList
