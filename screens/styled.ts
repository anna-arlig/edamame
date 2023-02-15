import styled from 'styled-components/native'
import colors from '../constants/colors'

export const HomeContainer = styled.View``

export const RecipeContainer = styled.View`
background-color: ${colors.primary.background_beige};
height: 100%;
`

export const TitleContainer = styled.View`
margin-top: -20px;
padding-bottom: 15px;
`

export const Background = styled.ImageBackground`
  height: 320px;
  background-size: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
export const ChipContainer = styled.View`
justify-content: flex-start;
flex-direction: row;
transform: translateY(-50px);
`