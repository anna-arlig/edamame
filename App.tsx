import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Spacer from 'react-styled-spacer/dist/Spacer'
import Header from './components/Header'
import RecipeCardList from './components/RecipeCardList/RecipeCardList'
import colors from './constants/colors'
import { Body, Headline } from './constants/typography'

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: colors.primary.background_beige,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <Spacer h={10} />
        <Headline>Todays favourites</Headline>
        <Body style={{ paddingLeft: 10, paddingBottom: 10 }}>
          What we are eating today at the edamame office!
        </Body>
        <RecipeCardList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
