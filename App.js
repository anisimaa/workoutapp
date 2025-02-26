import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200EE', 
    accent: '#03DAC5',  
    background: '#F6F6F6', 
    text: '#000000' 
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Statistics" component={StatisticsScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  )
}

export default App;

