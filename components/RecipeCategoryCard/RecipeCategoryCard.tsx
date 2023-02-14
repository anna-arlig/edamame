import React, { FC } from 'react'
import * as S from './styled'
import { RecipeCategoryTitle } from '../../constants/typography'
import { useSingleRecipe } from '../../hooks/useSingleRecipe'

type Props = {
  mealType: string
}

const RecipeCategoryCard: FC<Props> = ({ mealType }) => {
  const { recipe } = useSingleRecipe(mealType)

  return (
    <S.RecipeCategoryContainer>
      <S.Background source={{ uri: `${recipe.imgSmall}` }} />
      <S.RecipeCategoryTitleContainer>
        <RecipeCategoryTitle numberOfLines={2}>{recipe.mealType}</RecipeCategoryTitle>
      </S.RecipeCategoryTitleContainer>
    </S.RecipeCategoryContainer>
  )
}

export default RecipeCategoryCard
