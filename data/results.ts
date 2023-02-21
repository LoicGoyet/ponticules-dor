export type Result = {
  id: string;
  winnerTitle: string;
  category: string;
  order: number;
  remitter: {
    name: string;
    gender: 'male' | 'female' | 'other';
  };
};

export const getResult = (code: unknown) => {
  if (typeof code === 'string' && code in results) {
    return results[code];
  }

  throw new Error('Invalid code');
};

const results: Record<string, Result> = {
  jvh9fuc: {
    id: 'jvh9fuc',
    order: 1,
    category: 'Le plus gros coup dur concept art / réalisation',
    winnerTitle: 'Disney’s KiteTails',
    remitter: {
      name: 'Logo',
      gender: 'male',
    },
  },
  'àKv!9': {
    id: 'àKv!9',
    order: 2,
    category: 'Le drama de l’année',
    winnerTitle: 'La bague de Raphy',
    remitter: {
      name: 'Coco',
      gender: 'male',
    },
  },
  '8jdh5c': {
    id: '8jdh5c',
    order: 3,
    category: 'La hot-take la plus éclatée de l’année',
    winnerTitle:
      '« "Rêvons... et le Monde s’Illumine" est un mauvais show car il compte seulement XX danseurs et personnages »- éParcurien',
    remitter: {
      name: 'Peppermint',
      gender: 'female',
    },
  },
  '9jfbhGk': {
    id: '9jfbhGk',
    order: 4,
    category: 'La Mackerie de l’année',
    winnerTitle: 'L’accouchement de Sandy en vidéo',
    remitter: {
      name: 'Vincenfr',
      gender: 'male',
    },
  },
  DKçJf: {
    id: 'DKçJf',
    order: 5,
    category: 'La meilleure apparition dans une vidéo de l’année',
    winnerTitle:
      'La personne qui ressemble à Coco dans le flashmob Pirates & Princesses de AAD',
    remitter: {
      name: 'Jutima',
      gender: 'female',
    },
  },
  kco9jfh: {
    id: 'kco9jfh',
    order: 6,
    category: 'Le melon de l’année',
    winnerTitle: 'Allyyy',
    remitter: {
      name: 'Raccoon',
      gender: 'male',
    },
  },
  '0!fj8j': {
    id: '0!fj8j',
    order: 7,
    category: 'Le pire produit food / la pire dégustation de l’année',
    winnerTitle: 'La dégustation du Krusty Burger par le mec dégueulasse',
    remitter: {
      name: 'Léatchoum',
      gender: 'female',
    },
  },
  çJfn7h: {
    id: 'çJfn7h',
    order: 8,
    category: 'Meilleur second rôle',
    winnerTitle: 'Ed',
    remitter: {
      name: 'Coco',
      gender: 'male',
    },
  },
  '8jf,c!': {
    id: '8jf,c!',
    order: 9,
    category: 'La meilleure "mascotte à la con" de l’année',
    winnerTitle: 'Arthur',
    remitter: {
      name: 'Raccoon',
      gender: 'male',
    },
  },
  Oj9d: {
    id: 'Oj9d',
    order: 10,
    category: 'La pire disasterclass de l’année',
    winnerTitle: 'Le voyage à WDW de Sami',
    remitter: {
      name: 'Vincenfr',
      gender: 'male',
    },
  },
  '9jfàjH': {
    id: '9jfàjH',
    order: 11,
    category: 'La plus grosse glissade de l’année',
    winnerTitle: 'Le compte Twitter de Vrogui',
    remitter: {
      name: 'Jutima',
      gender: 'female',
    },
  },
  kdh8hf: {
    id: 'kdh8hf',
    order: 12,
    category: 'Lae connard·asse de l’année',
    winnerTitle: 'éParcurien',
    remitter: {
      name: 'Léatchoum',
      gender: 'female',
    },
  },
} as const;
