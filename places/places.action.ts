import {
  FETCH_PLACES,
  FETCH_PLACES_SUCCESS,
  TOGGLE_VISITED,
} from './places.types';
import { Place } from '../types/Place';

export const fetchPlaces = () => ({
  type: FETCH_PLACES,
});

export const fetchPlacesSuccess = (places: Place[]) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: places,
});

export const toggleVisited = (id: string) => ({
  type: TOGGLE_VISITED,
  payload: id,
});