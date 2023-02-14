import React, { FC } from 'react'
import * as S from './styled'
import { RecipeCategoryTitle } from '../../constants/typography'
import { useSingleRecipe } from '../../hooks/useSingleRecipe'

const RecipeCard: FC = () => {
  const { recipe } = useSingleRecipe('Dinner')
  return (
    <S.RecipeCardContainer>
      <S.Background source={{ uri: `${recipe.imgSmall}` }} />
      <S.RecipeCardTitleContainer>
        <RecipeCategoryTitle numberOfLines={2}>{recipe.mealType}</RecipeCategoryTitle>
      </S.RecipeCardTitleContainer>
    </S.RecipeCardContainer>
  )
}

export default RecipeCard
