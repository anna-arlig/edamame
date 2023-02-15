import React, { FC } from 'react'
import { ChipTitle } from '../../constants/typography'
import * as S from './styled'

type Props = {
  content: string
}

const Fab: FC<Props> = ({ content }) => {
  return (
    <S.ChipContainer>
      <ChipTitle>{content}</ChipTitle>
    </S.ChipContainer>
  )
}

export default Fab
