import React, { FC } from 'react'
import Spacer from 'react-styled-spacer/dist/Spacer'
import RecipeCardList from '.././components/RecipeCardList/RecipeCardList'
import RecipeCategoryCard from '.././components/RecipeCategoryCard/RecipeCategoryCard'
import { Body, Headline } from '.././constants/typography'
import RecipeCategoryList from '../components/RecipeCategoryList/RecipeCategoryList'
import * as S from './styled'

const HomeScreen: FC = () => {
  return (
    <S.HomeContainer>
      <Spacer h={10} />
      <Headline>Todays favourites</Headline>
      <Body style={{ paddingLeft: 10, paddingBottom: 10 }}>
        What we are eating today at the edamame office!
      </Body>
      <RecipeCardList />
      <Spacer h={10} />
      <Headline>What do you want to eat today?</Headline>
      <Body style={{ paddingLeft: 10, paddingBottom: 10 }}>
        Fancy brunch or breakfast for dinner? We got you covered!
      </Body>
      <Spacer h={10} />
      <RecipeCategoryList />
    </S.HomeContainer>
  )
}

export default HomeScreen
