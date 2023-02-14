import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Header from './components/Header'
import colors from './constants/colors'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: colors.primary.background_beige,
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          <Header />
          <HomeScreen></HomeScreen>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
