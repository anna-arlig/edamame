import React, { FC } from 'react'
import * as S from './styled'
import { useNavigation } from '@react-navigation/native'
import BackArrow from '../../assets/Svg/BackArrow'

type Props = {}

const Fab: FC<Props> = () => {
  const navigation = useNavigation<any>()
  const onPress = () => navigation.navigate('Home')
  return (
    <S.FabContainer onPress={onPress}>
      <BackArrow></BackArrow>
    </S.FabContainer>
  )
}

export default Fab
