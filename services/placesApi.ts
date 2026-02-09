// src/services/placesApi.ts
import { Place } from '../types/Place';

export const fetchPlacesApi = async (): Promise<Place[]> => {
  return Promise.resolve([
    {
      id: '1',
      name: 'Great Wall of China',
      description: 'Ancient wall built to protect Chinese states.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/GreatWallBadaling.JPG',
      visited: false,
    },
    {
      id: '2',
      name: 'Machu Picchu',
      description: 'Incan citadel in the Andes Mountains.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg',
      visited: false,
    },
    {
      id: '3',
      name: 'Pyramids of Giza',
      description: 'Iconic pyramids built as tombs for Egyptian pharaohs.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg',
      visited: false,
    },
    {
      id: '4',
      name: 'Colosseum',
      description: 'Ancient Roman amphitheater used for gladiatorial contests.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg',
      visited: false,
    },
    {
      id: '5',
      name: 'Taj Mahal',
      description: 'White marble mausoleum built by Mughal emperor Shah Jahan.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg',
      visited: false,
    },
    {
      id: '6',
      name: 'Petra',
      description: 'Rock-cut city and capital of the Nabataean Kingdom.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/9d/Al_Khazneh_Petra_Edit_2.jpg',
      visited: false,
    },
    {
      id: '7',
      name: 'Angkor Wat',
      description: 'Largest religious monument in the world, located in Cambodia.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Angkor_Wat_temple.jpg',
      visited: false,
    },
    {
      id: '8',
      name: 'Stonehenge',
      description: 'Prehistoric monument consisting of massive standing stones.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg',
      visited: false,
    },
    {
      id: '9',
      name: 'Acropolis of Athens',
      description:
        'Ancient citadel containing remains of classical Greek buildings.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/dc/Acropolis_of_Athens_2019.jpg',
      visited: false,
    },
    {
      id: '10',
      name: 'Easter Island Moai',
      description:
        'Monolithic human figures carved by the Rapa Nui people.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/1/1c/Moai_Rano_raraku.jpg',
      visited: false,
    },
  ]);
};