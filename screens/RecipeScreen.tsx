import React, { FC } from 'react'
import Spacer from 'react-styled-spacer/dist/Spacer'
import { Headline } from '../constants/typography'
import * as S from './styled'

const RecipeScreen: FC = () => {
  return (
    <S.HomeContainer>
      <Spacer h={10} />
      <Headline>Todays favourites</Headline>
    </S.HomeContainer>
  )
}

export default RecipeScreen
