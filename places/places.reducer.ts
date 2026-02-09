import {
  FETCH_PLACES_SUCCESS,
  TOGGLE_VISITED,
} from './places.types';
import { Place } from '../types/Place';

type State = {
  places: Place[];
};

const initialState: State = {
  places: [],
};

export default function placesReducer(
  state = initialState,
  action: any
): State {
  switch (action.type) {
    case FETCH_PLACES_SUCCESS:
      return { ...state, places: action.payload };

    case TOGGLE_VISITED:
      return {
        ...state,
        places: state.places.map(p =>
          p.id === action.payload
            ? { ...p, visited: !p.visited }
            : p
        ),
      };

    default:
      return state;
  }
}