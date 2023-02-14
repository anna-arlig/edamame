import { RouteProp, useRoute } from '@react-navigation/native'
import React, { FC } from 'react'
import Spacer from 'react-styled-spacer/dist/Spacer'
import Fab from '../components/Fab/Fab'
import { Headline } from '../constants/typography'
import * as S from './styled'

const RecipeScreen: FC = ({ route }) => {
  const { recipe } = route.params
  return (
    <S.RecipeContainer>
      <S.Background source={{ uri: `${recipe.imgLarge}` }} />
      <Fab></Fab>
      <Spacer h={10} />
      <Headline>{recipe.recipeName}</Headline>
    </S.RecipeContainer>
  )
}

export default RecipeScreen
