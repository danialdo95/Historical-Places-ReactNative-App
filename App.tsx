// 🚨 MUST be first
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

import AppNavigator from './navigation/AppNavigator';
import { PlacesProvider } from './context/PlacesContext';
import { Linking } from 'react-native';

enableScreens(true);

// 🔗 Deep linking configuration
const linking = {
  prefixes: ['historicalplaces://'],

  // ✅ Handle cold start
  async getInitialURL() {
    const url = await Linking.getInitialURL();
    return url;
  },

  // ✅ Handle warm start (app already open)
  subscribe(listener: (url: string) => void) {
    const onReceiveURL = ({ url }: { url: string }) => listener(url);

    const subscription = Linking.addEventListener('url', onReceiveURL);

    return () => subscription.remove();
  },

  config: {
    initialRouteName: 'Places',
    screens: {
      Places: 'places',
      Details: 'place/:id',
    },
  },
};
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PlacesProvider>
        <NavigationContainer linking={linking} fallback={null}>
          <AppNavigator />
        </NavigationContainer>
      </PlacesProvider>
    </GestureHandlerRootView>
  );
}