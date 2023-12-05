import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './components/Home';
import { Add } from './components/Add';
import { BookView } from './components/BookView';

export type RootStackParamList = {
  Home: { title: string; author: string; genre: string; pages: string };
  Add: undefined;
  BookView: undefined;
  Genre: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
