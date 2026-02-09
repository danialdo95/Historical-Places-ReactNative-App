// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlaceListScreen from '../screens/PlaceListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Places" component={PlaceListScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={PlaceDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}