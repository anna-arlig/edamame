# edamame
Mock code test from Redmind

Figma: https://www.figma.com/file/YolfPG3eYe36VHZdFmclrw/Edamame?node-id=0%3A1&t=AWKzo8G3OtDlmNMk-0

## Instructions

Your task is to create an app that showcases recipes from this from the Edamam API

https://api.edamam.com/api/recipes/v2

https://developer.edamam.com/edamam-docs-recipe-api

In the app you should showcase the recipes, and if the user presses a recipe the user should be navigated to another page with details about it:

Name of the dish

Ingredients

An image of the dish

What type of meal it is (breakfast, lunch, dinner)


## Learnings and challenges

This was my first time setting up a React Native project. I learned about structuring a project. This was supposed to be a smaller project so 
I didn't want to go overboard with the architecture but still make it scallable. My biggest challenge was implementing dotenv in the 
project which led to me unintentionally pushing stuff that shouldn't be pushed. My second challenge was the safe are view combined with React 
Navigation. Both of these were really unexpected problems. 


## Test

First check that you have the correct environment setup by visiting this guide: https://reactnative.dev/docs/environment-setup

Make sure to choose "React Native CLI Quickstart", your development OS and target OS "iOS". 

After cloning the project and navigating in to root run:

1. npm install

2. cd ios && pod install

3. cd ..

4. npx react-native run-ios
