import React, { FC } from 'react'
import * as S from './styled'
import { RecipeCategoryTitle } from '../../constants/typography'
import { useSingleRecipe } from '../../hooks/useSingleRecipe'
import { useNavigation } from '@react-navigation/native'

type Props = {
  mealType: string
}

const RecipeCategoryCard: FC<Props> = ({ mealType }) => {
  const navigation = useNavigation<any>()
  const onPress = () => navigation.navigate('Recipe', { recipe })
  const { recipe } = useSingleRecipe(mealType)

  return (
    <S.RecipeCategoryContainer onPress={onPress}>
      <S.Background source={{ uri: `${recipe.imgSmall}` }} />
      <S.RecipeCategoryTitleContainer>
        <RecipeCategoryTitle numberOfLines={2}>{recipe.mealType}</RecipeCategoryTitle>
      </S.RecipeCategoryTitleContainer>
    </S.RecipeCategoryContainer>
  )
}

export default RecipeCategoryCard
