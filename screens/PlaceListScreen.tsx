import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PlaceCard from '../components/PlaceCard';
import { fetchPlaces, toggleVisited } from '../places/places.action';

export default function PlaceListScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const places = useSelector((state: any) => state.places.places);

  const [suggestedPlace, setSuggestedPlace] = useState<any>(null);
  const [suggestionImageError, setSuggestionImageError] = useState(false);

  console.log('Redux places:', places);
  // 🔄 Fetch places via Epic
  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  const suggestRandomPlace = () => {
    if (places.length === 0) return;

    const randomIndex = Math.floor(Math.random() * places.length);
    setSuggestionImageError(false);
    setSuggestedPlace(places[randomIndex]);
  };

  const clearSuggestedPlace = () => {
    setSuggestionImageError(false);
    setSuggestedPlace(null);
  };

  return (
    <View style={styles.container}>
      {/* 🎲 Fun Feature */}
      <Pressable style={styles.randomButton} onPress={suggestRandomPlace}>
        <Text style={styles.randomButtonText}>🎲 Suggest a Random Place</Text>
      </Pressable>

      {/* Suggested Place Preview */}
      {suggestedPlace && (
        <View style={styles.suggestionWrapper}>
          <Pressable
            style={styles.suggestionCard}
            onPress={() =>
              navigation.navigate('Details', { id: suggestedPlace.id })
            }
          >
            <Image
              source={
                suggestionImageError || !suggestedPlace.image
                  ? require('../assets/image-not-available.png')
                  : { uri: suggestedPlace.image }
              }
              style={styles.suggestionImage}
              onError={() => setSuggestionImageError(true)}
            />
            <Text style={styles.suggestionTitle}>{suggestedPlace.name}</Text>
            <Text style={styles.suggestionHint}>Tap to view details</Text>
          </Pressable>

          <Pressable style={styles.clearButton} onPress={clearSuggestedPlace}>
            <Text style={styles.clearButtonText}>Clear suggestion</Text>
          </Pressable>
        </View>
      )}

      <FlatList
        data={
          suggestedPlace
            ? places.filter(p => p.id !== suggestedPlace.id)
            : places
        }
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <PlaceCard
            place={item}
            onPress={() =>
              navigation.navigate('Details', { id: item.id })
            }
            onToggle={() => dispatch(toggleVisited(item.id))}
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
  suggestionWrapper: {
    marginBottom: 8,
  },
  clearButton: {
    alignSelf: 'center',
    marginTop: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: '#E5E7EB',
  },
  clearButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
  },
});
