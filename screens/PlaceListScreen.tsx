import React, { useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { PlacesContext } from '../context/PlacesContext';
import PlaceCard from '../components/PlaceCard';

export default function PlaceListScreen({ navigation }: any) {
  const { state, dispatch } = useContext(PlacesContext);

  console.log("Rendering PlaceListScreen with places:", state.places);

  return (
    <View>
      {state.places.length === 0 && (
        <View>
          <Text>No places available.</Text>
        </View>
      )}
      <FlatList
        data={state.places}
        keyExtractor={item => item.id}
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