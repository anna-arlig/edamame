import styled from 'styled-components/native'
import colors from '../../constants/colors';

export const RecipeCategoryContainer = styled.TouchableOpacity`
  background-color: ${colors.primary.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);;
  height: 174px;
  width: 135px;
  position: relative;
  justify-content: flex-end;
  margin: 7px;
`

export const Background = styled.ImageBackground`
  height: 125px;
  position: absolute;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const RecipeCategoryTitleContainer = styled.View`
height: 49px;
justify-content: center;
align-items: center;
`
