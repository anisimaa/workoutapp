import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ExerciseListScreen from './screens/ExerciseListScreen';
import StatisticsScreen from './screens/StatisticsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ExerciseList" component={ExerciseListScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Statistics" component={StatisticsScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

