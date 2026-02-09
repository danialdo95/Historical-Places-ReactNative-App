// src/context/PlacesContext.tsx
import React, { createContext, useReducer, useEffect } from "react";
import { Place } from "../types/Place";
import { fetchPlacesApi } from "../services/placesApi";

type State = {
  places: Place[];
};

type Action =
  | { type: "SET_PLACES"; payload: Place[] }
  | { type: "TOGGLE_VISITED"; payload: string };

const initialState: State = {
  places: [],
};

function placesReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_PLACES":
      return { ...state, places: action.payload };

    case "TOGGLE_VISITED":
      return {
        ...state,
        places: state.places.map((place) =>
          place.id === action.payload
            ? { ...place, visited: !place.visited }
            : place,
        ),
      };

    default:
      return state;
  }
}

export const PlacesContext = createContext<any>(null);

export function PlacesProvider({ children }: { children: React.ReactNode }) {
  console.log("PlacesProvider rendered");
  const [state, dispatch] = useReducer(placesReducer, initialState);
  console.log("Initial state:", state);

  useEffect(() => {
    const loadPlaces = async () => {
      const data = await fetchPlacesApi();

      const normalizedData = data.map((place) => ({
        ...place,
        visited: Boolean(place.visited), // ✅ FORCE boolean
      }));

      dispatch({ type: "SET_PLACES", payload: normalizedData });
    };

    loadPlaces();
  }, []);

  return (
    <PlacesContext.Provider value={{ state, dispatch }}>
      {children}
    </PlacesContext.Provider>
  );
}
