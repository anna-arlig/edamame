import React, { FC } from 'react'
import * as S from './styled'
import { HeaderText } from '../constants/typography'
import Fab from './Fab/Fab'

type Props = {}

const Header: FC<Props> = () => {
  return (
    <S.HeaderContainer>
      <HeaderText>edamame</HeaderText>
      <Fab />
    </S.HeaderContainer>
  )
}

export default Header
