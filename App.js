import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CarListPage from './components/screens/CarListPage'; 
import CarDetailsPage from './components/screens/CarDetailsPage'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CarList">
        <Stack.Screen name="CarList" component={CarListPage} options={{ title: 'Lista de Carros' }} />
        <Stack.Screen name="CarDetails" component={CarDetailsPage} options={{ title: 'Detalhes do Carro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
