// src/screens/PlaceDetailScreen.tsx
import React, { useContext } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { PlacesContext } from '../context/PlacesContext';

export default function PlaceDetailScreen({ route }: any) {
  const { id } = route.params;
  const { state, dispatch } = useContext(PlacesContext);

  const place = state.places.find((p: any) => p.id === id);

  if (!place) return null;

  return (
    <View>
      <Image source={{ uri: place.image }} style={{ height: 200 }} />
      <Text>{place.name}</Text>
      <Text>{place.description}</Text>
      <Button
        title={place.visited ? 'Unvisit' : 'Mark Visited'}
        onPress={() =>
          dispatch({ type: 'TOGGLE_VISITED', payload: place.id })
        }
      />
    </View>
  );
}