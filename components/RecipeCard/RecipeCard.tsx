import React, { FC } from 'react'
import * as S from './styled'
import { RecipeCardTitle } from '../../constants/typography'
import { useRecipes } from '../../hooks/useRecipes'
import { View } from 'react-native/Libraries/Components/View/View'
import Spacer from 'react-styled-spacer/dist/Spacer'

type Props = {}

const Header: FC<Props> = () => {
  const recipes = useRecipes()

  return (
    <S.RecipeCardContainer>
      <S.Background source={{ uri: `${recipes.dinnerRecipe.imgSmall}` }} />
      <Spacer h={10} />
      <S.RecipeCardTitleContainer>
        <RecipeCardTitle numberOfLines={2}>{recipes.dinnerRecipe.recipeName}</RecipeCardTitle>
      </S.RecipeCardTitleContainer>
    </S.RecipeCardContainer>
  )
}

export default Header
