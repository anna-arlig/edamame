import { RouteProp, useRoute } from '@react-navigation/native'
import React, { FC } from 'react'
import { FlatList } from 'react-native'
import Chip from '../components/Chip/Chip'
import Fab from '../components/Fab/Fab'
import { Body, Headline } from '../constants/typography'
import * as S from './styled'

const RecipeScreen: FC = ({ route }) => {
  const { recipe } = route.params
  return (
    <S.RecipeContainer>
      <S.Background source={{ uri: `${recipe.imgLarge}` }} />
      <S.ChipContainer>
        <Chip content={recipe.mealType} />
        <Chip content={recipe.cuisine} />
      </S.ChipContainer>
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
