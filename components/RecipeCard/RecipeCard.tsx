import React, { FC } from 'react'
import * as S from './styled'
import { RecipeCardTitle } from '../../constants/typography'
import { Recipe } from '../../hooks/useRecipes'

type Props = {
  recipe: Recipe[]
}

const RecipeCard: FC<Props> = recipe => {
  return (
    <S.RecipeCardContainer>
      <S.Background source={{ uri: `${recipe.imgSmall}` }} />
      <S.RecipeCardTitleContainer>
        <RecipeCardTitle numberOfLines={2}>{recipe.recipeName}</RecipeCardTitle>
      </S.RecipeCardTitleContainer>
    </S.RecipeCardContainer>
  )
}

export default RecipeCard
