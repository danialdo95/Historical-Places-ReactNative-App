// 🚨 MUST be first
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

import AppNavigator from './navigation/AppNavigator';
import { PlacesProvider } from './context/PlacesContext';

enableScreens(true);

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PlacesProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PlacesProvider>
    </GestureHandlerRootView>
  );
}