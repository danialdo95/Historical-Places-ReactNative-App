// src/screens/PlaceDetailScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisited } from '../places/places.action';

const fallbackImage = require('../assets/image-not-available.png');

export default function PlaceDetailScreen({ route }: any) {
  const { id } = route.params;

  const dispatch = useDispatch();
  const place = useSelector((state: any) =>
    state.places.places.find((p: any) => p.id === id)
  );

  const [imageError, setImageError] = useState(false);

  // ⏳ Handle cold deep-link or slow load
  if (!place) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading place details…</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        source={imageError ? fallbackImage : { uri: place.image }}
        style={styles.image}
        onError={() => setImageError(true)}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{place.name}</Text>
        <Text style={styles.description}>{place.description}</Text>

        <Pressable
          style={[
            styles.button,
            place.visited ? styles.visitedButton : styles.primaryButton,
          ]}
          onPress={() => dispatch(toggleVisited(place.id))}
        >
          <Text style={styles.buttonText}>
            {place.visited ? 'Visited' : 'Mark Visited'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  image: {
    width: '100%',
    height: 260,
    backgroundColor: '#E5E7EB',
  },
  content: {
    marginTop: -20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -4 },
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#2563EB',
  },
  visitedButton: {
    backgroundColor: '#16A34A',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F6FA',
  },
  loadingText: {
    fontSize: 16,
    color: '#6B7280',
  },
});
