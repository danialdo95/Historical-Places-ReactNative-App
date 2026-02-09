// src/components/PlaceCard.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function PlaceCard({ place, onPress, onToggle }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: place.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{place.name}</Text>
        <Text style={styles.description}>{place.description}</Text>

        <View style={styles.actions}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.secondaryButton,
              pressed && styles.pressed,
            ]}
            onPress={onPress}
          >
            <Text style={styles.secondaryText}>View Details</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              place.visited ? styles.visitedButton : styles.primaryButton,
              pressed && styles.pressed,
            ]}
            onPress={onToggle}
          >
            <Text style={styles.primaryText}>
              {place.visited ? 'Visited' : 'Mark Visited'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3, // Android shadow
  },
  image: {
    width: '100%',
    height: 160,
    backgroundColor: '#EAEAEA',
  },
  content: {
    padding: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#6B6B6B',
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#2563EB',
  },
  visitedButton: {
    backgroundColor: '#16A34A',
  },
  secondaryButton: {
    backgroundColor: '#F1F5F9',
  },
  primaryText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  secondaryText: {
    color: '#2563EB',
    fontWeight: '600',
    fontSize: 14,
  },
  pressed: {
    opacity: 0.85,
  },
});