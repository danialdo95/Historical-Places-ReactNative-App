import React, { useContext, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Pressable, Image } from 'react-native';
import { PlacesContext } from '../context/PlacesContext';
import PlaceCard from '../components/PlaceCard';

export default function PlaceListScreen({ navigation }: any) {
  const { state, dispatch } = useContext(PlacesContext);
  const [suggestedPlace, setSuggestedPlace] = useState<any>(null);

  const suggestRandomPlace = () => {
    if (state.places.length === 0) return;

    const randomIndex = Math.floor(Math.random() * state.places.length);
    setSuggestedPlace(state.places[randomIndex]);
  };

  return (
    <View style={styles.container}>
      {/* 🎲 Fun Feature */}
      <Pressable style={styles.randomButton} onPress={suggestRandomPlace}>
        <Text style={styles.randomButtonText}>🎲 Suggest a Random Place</Text>
      </Pressable>

      {/* Suggested Place Preview */}
      {suggestedPlace && (
        <Pressable
          style={styles.suggestionCard}
          onPress={() =>
            navigation.navigate('Details', { id: suggestedPlace.id })
          }
        >
          <Image
            source={{ uri: suggestedPlace.image }}
            style={styles.suggestionImage}
          />
          <Text style={styles.suggestionTitle}>
            {suggestedPlace.name}
          </Text>
          <Text style={styles.suggestionHint}>Tap to view details</Text>
        </Pressable>
      )}

      <FlatList
        data={state.places}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <PlaceCard
            place={item}
            onPress={() =>
              navigation.navigate('Details', { id: item.id })
            }
            onToggle={() =>
              dispatch({ type: 'TOGGLE_VISITED', payload: item.id })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  randomButton: {
    backgroundColor: '#7C3AED',
    margin: 16,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  randomButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  suggestionCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  suggestionImage: {
    width: '100%',
    height: 160,
  },
  suggestionTitle: {
    fontSize: 18,
    fontWeight: '600',
    padding: 12,
    color: '#111827',
  },
  suggestionHint: {
    fontSize: 13,
    color: '#6B7280',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
});