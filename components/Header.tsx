import React, {FC} from 'react';
import * as S from './styled';
import {HeaderText} from '../constants/typography';

type Props = {};

const Header: FC<Props> = () => {
  return (
    <S.HeaderContainer>
      <HeaderText>edamame</HeaderText>
    </S.HeaderContainer>
  );
};

export default Header;
