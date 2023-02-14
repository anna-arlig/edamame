import React, { FC, useEffect, useState } from 'react'
import * as S from './styled'
import RecipeCategoryCard from '../RecipeCategoryCard/RecipeCategoryCard'

const RecipeCardList: FC = () => {
  return (
    <S.RecipeCategoryContainer>
      <RecipeCategoryCard mealType={'Breakfast'} />
      <RecipeCategoryCard mealType={'Dinner'} />
      <RecipeCategoryCard mealType={'Snack'} />
      <RecipeCategoryCard mealType={'Teatime'} />
    </S.RecipeCategoryContainer>
  )
}

export default RecipeCardList
