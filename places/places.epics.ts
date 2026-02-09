import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { fetchPlacesApi } from '../services/placesApi';

// ✅ FIXED IMPORTS
import { FETCH_PLACES } from './places.types';
import { fetchPlacesSuccess } from './places.action';

export const fetchPlacesEpic = (action$: any) =>
  action$.pipe(
    ofType(FETCH_PLACES),
    mergeMap(() =>
      from(fetchPlacesApi()).pipe(
        map(data =>
          fetchPlacesSuccess(
            data.map(p => ({
              ...p,
              visited: Boolean(p.visited),
            }))
          )
        )
      )
    )
  );