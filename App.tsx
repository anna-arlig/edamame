import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import Header from './components/Header';
import colors from './constants/colors';
import {useRecipes} from './hooks/useRecipes';

function App(): JSX.Element {
  const recipes = useRecipes();

  console.log('this is recipes:', recipes.dinnerRecipe);
  const backgroundStyle = {
    backgroundColor: colors.primary.background_beige,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
