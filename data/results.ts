export type Result = {
  winnerTitle: string;
  category: string;
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
    category: 'Le plus gros coup dur concept art / réalisation',
    winnerTitle: 'Disney’s KiteTails',
    remitter: {
      name: 'Logo',
      gender: 'male',
    },
  },
  'àKv!9': {
    category: 'Le drama de l’année',
    winnerTitle: 'La bague de Raphy',
    remitter: {
      name: 'Coco',
      gender: 'male',
    },
  },
  '8jdh5c': {
    category: 'La hot-take la plus éclatée de l’année',
    winnerTitle:
      '« "Rêvons... et le Monde s’Illumine" est un mauvais show car il compte seulement XX danseurs et personnages »- éParcurien',
    remitter: {
      name: 'Pepper',
      gender: 'female',
    },
  },
  '9jfbhGk': {
    category: 'La Mackerie de l’année',
    winnerTitle: 'L’accouchement de Sandy en vidéo',
    remitter: {
      name: 'Vincent',
      gender: 'male',
    },
  },
  DKçJf: {
    category: 'La meilleur « apparition dans une vidéo » de l’année',
    winnerTitle:
      'La personne qui ressemble à Coco dans le flashmob Pirates & Princesses de AAD',
    remitter: {
      name: 'Jutima',
      gender: 'female',
    },
  },
  kco9jfh: {
    category: 'Le melon de l’année',
    winnerTitle: 'Allyyy',
    remitter: {
      name: 'Raccoon',
      gender: 'male',
    },
  },
  '0!fj8j': {
    category: 'Le pire produit food / la pire dégustation de l’année',
    winnerTitle: 'La dégustation du Krusty Burger par le mec dégueulasse',
    remitter: {
      name: 'Léatchoum',
      gender: 'female',
    },
  },
  çJfn7h: {
    category: 'Meilleur second rôle',
    winnerTitle: 'Ed',
    remitter: {
      name: 'Coco',
      gender: 'male',
    },
  },
  '8jf,c!': {
    category: 'La meilleure "mascotte à la con" de l’année',
    winnerTitle: 'Arthur',
    remitter: {
      name: 'Raccoon',
      gender: 'male',
    },
  },
  Oj9d: {
    category: 'La pire disasterclass de l’année',
    winnerTitle: 'Le voyage à WDW de Sami',
    remitter: {
      name: 'Vincent',
      gender: 'male',
    },
  },
  '9jfàjH': {
    category: 'La plus grosse glissade de l’année',
    winnerTitle: 'Le compte Twitter de Vrogui',
    remitter: {
      name: 'Jutima',
      gender: 'female',
    },
  },
  kdh8hf: {
    category: 'Le connard / la connasse de l’année',
    winnerTitle: 'Léatchoum',
    remitter: {
      name: 'Coco',
      gender: 'female',
    },
  },
} as const;
