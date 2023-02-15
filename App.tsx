import React from 'react'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecipeScreen from './screens/RecipeScreen'
import { HeaderText } from './constants/typography'
import Fab from './components/Fab/Fab'
import colors from './constants/colors'

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'edamame',
            headerStyle: {
              backgroundColor: colors.primary.light_green,
              paddingBottom: 20,
            },
            headerTitle: props => <HeaderText {...props} />,
          }}
        />
        <Stack.Screen
          name="Recipe"
          component={RecipeScreen}
          options={{
            title: 'edamame',
            headerStyle: {
              backgroundColor: colors.primary.light_green,
            },
            headerTitle: props => <HeaderText {...props} />,
            headerRight: () => <Fab />,
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
