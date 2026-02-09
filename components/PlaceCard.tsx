// src/components/PlaceCard.tsx
import React from 'react';
import { View, Text, Button, Image } from 'react-native';

export default function PlaceCard({ place, onPress, onToggle }: any) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Image source={{ uri: place.image }} style={{ height: 150 }} />
      <Text>{place.name}</Text>
      <Text>{place.description}</Text>
      <Button title="View Details" onPress={onPress} />
      <Button
        title={place.visited ? 'Unvisit' : 'Mark Visited'}
        onPress={onToggle}
      />
    </View>
  );
}