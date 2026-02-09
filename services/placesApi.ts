// src/services/placesApi.ts
import { Place } from '../types/Place';

export const fetchPlacesApi = async (): Promise<Place[]> => {
  return Promise.resolve([
    {
      id: '1',
      name: 'Great Wall of China',
      description: 'Ancient wall built to protect Chinese states.',
      image: 'https://via.placeholder.com/300',
      visited: false,
    },
    {
      id: '2',
      name: 'Machu Picchu',
      description: 'Incan citadel in the Andes Mountains.',
      image: 'https://via.placeholder.com/300',
      visited: false,
    },
  ]);
};