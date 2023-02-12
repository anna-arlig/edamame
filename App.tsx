import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Header from './components/Header'
import RecipeCard from './components/RecipeCard/RecipeCard'
import colors from './constants/colors'

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: colors.primary.background_beige,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <RecipeCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
