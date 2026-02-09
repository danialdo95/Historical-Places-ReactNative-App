import { combineEpics } from 'redux-observable';
import { fetchPlacesEpic } from '../places/places.epics';

export const rootEpic = combineEpics(
  fetchPlacesEpic
);