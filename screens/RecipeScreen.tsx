import { RouteProp, useRoute } from '@react-navigation/native'
import React, { FC } from 'react'
import { FlatList, Text, View } from 'react-native'
import Spacer from 'react-styled-spacer/dist/Spacer'
import Fab from '../components/Fab/Fab'
import { Body, Headline } from '../constants/typography'
import * as S from './styled'

const RecipeScreen: FC = ({ route }) => {
  const { recipe } = route.params
  return (
    <S.RecipeContainer>
      <Fab />
      <S.Background source={{ uri: `${recipe.imgLarge}` }} />
      <S.TitleContainer>
        <Headline numberOfLines={2}>{recipe.recipeName}</Headline>
      </S.TitleContainer>
      <FlatList
        style={{ paddingLeft: 10 }}
        data={recipe.ingredients}
        renderItem={({ item }) => {
          return <Body>{item}</Body>
        }}
      />
    </S.RecipeContainer>
  )
}

export default RecipeScreen
