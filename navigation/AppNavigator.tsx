// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlaceListScreen from '../screens/PlaceListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2563EB' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '600' },
      }}
    >
      <Stack.Screen
        name="Places"
        component={PlaceListScreen}
        options={{ title: 'Historical Places' }}
      />
      <Stack.Screen
        name="Details"
        component={PlaceDetailScreen}
        options={{ title: 'Place Details' }}
      />
    </Stack.Navigator>
  );
}