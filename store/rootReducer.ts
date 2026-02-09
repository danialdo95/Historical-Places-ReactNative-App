import { combineReducers } from 'redux';
import placesReducer from '../places/places.reducer';

export default combineReducers({
  places: placesReducer,
});