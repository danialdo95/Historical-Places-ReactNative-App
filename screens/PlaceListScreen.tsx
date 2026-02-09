import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { PlacesContext } from '../context/PlacesContext';
import PlaceCard from '../components/PlaceCard';

export default function PlaceListScreen({ navigation }: any) {
  const { state, dispatch } = useContext(PlacesContext);

  return (
    <View style={styles.container}>
      {state.places.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No places yet</Text>
          <Text style={styles.emptySubtitle}>
            Historical places will appear here.
          </Text>
        </View>
      ) : (
        <FlatList
          data={state.places}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
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
      )}
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
    paddingBottom: 24,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
});