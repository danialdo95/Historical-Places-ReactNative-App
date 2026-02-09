// src/components/RandomButton.tsx
import React, { useContext } from 'react';
import { Button } from 'react-native';
import { PlacesContext } from '../context/PlacesContext';

export default function RandomButton({ navigation }: any) {
  const { state } = useContext(PlacesContext);

  const suggestRandomPlace = () => {
    const random =
      state.places[Math.floor(Math.random() * state.places.length)];
    navigation.navigate('Details', { id: random.id });
  };

  return <Button title="Suggest Random Place" onPress={suggestRandomPlace} />;
}