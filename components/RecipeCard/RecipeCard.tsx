import React, { FC } from 'react'
import * as S from './styled'
import { RecipeCardTitle } from '../../constants/typography'
import { Recipe } from '../../hooks/useSingleRecipe'
import { useNavigation } from '@react-navigation/native'

type Props = {
  recipe: Recipe
}

const RecipeCard: FC<Props> = ({ recipe }) => {
  const navigation = useNavigation<any>()
  const onPress = () => navigation.navigate('Recipe', { recipe })

  return (
    <S.RecipeCardContainer onPress={onPress}>
      <S.Background source={{ uri: `${recipe.imgSmall}` }} />
      <S.RecipeCardTitleContainer>
        <RecipeCardTitle numberOfLines={2}>{recipe.recipeName}</RecipeCardTitle>
      </S.RecipeCardTitleContainer>
    </S.RecipeCardContainer>
  )
}

export default RecipeCard
