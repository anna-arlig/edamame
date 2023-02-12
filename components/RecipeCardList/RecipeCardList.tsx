import React, { FC } from 'react'
import * as S from './styled'
import { Recipe, useRecipes } from '../../hooks/useRecipes'

type Props = {
  recipe: Recipe
}

const RecipeCard: FC<Props> = () => {
  const { randomRecipes } = useRecipes()
  console.log(randomRecipes)

  return (
    <S.RecipeListContainer>
      {randomRecipes.map(recipe => (
        <RecipeCard recipe={recipe}></RecipeCard>
      ))}
    </S.RecipeListContainer>
  )
}

export default RecipeCard
