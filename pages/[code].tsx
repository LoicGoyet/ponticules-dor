import type {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import styled from 'styled-components';
import Enveloppe from '../components/Enveloppe';

export const getServerSideProps: GetServerSideProps<{
  winnerTitle: Result['winnerTitle'];
  category: Result['category'];
}> = async (context) => {
  const {code} = context.query;

  if (typeof code === 'string' && code in results) {
    const {winnerTitle, category} = results[code];
    return {
      props: {
        winnerTitle,
        category,
      },
    };
  }

  return {
    notFound: true,
  };
};

const Code = ({
  winnerTitle,
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Main>
      <Enveloppe winnerTitle={winnerTitle} category={category} />
    </Main>
  );
};

type Result = {
  winnerTitle: string;
  category: string;
};

const results: Record<string, Result> = {
  Oj9d: {
    winnerTitle: 'Le voyage à WDW de Sami',
    category: 'La pire disasterclass de l’année',
  },
  DKçJf: {
    winnerTitle:
      'La personne qui ressemble à Coco dans le flashmob Pirates & Princesses de AAD',
    category: 'La meilleur « apparition dans une vidéo » de l’année',
  },
  '8jdh5c': {
    winnerTitle:
      '« "Rêvons... et le Monde s’Illumine" est un mauvais show car il compte seulement XX danseurs et personnages »- éParcurien',
    category: 'La hot-take la plus éclatée de l’année',
  },
  kdh8hf: {
    winnerTitle: 'éParcurien',
    category: 'Le connard / la connasse de l’année',
  },
  jvh9fuc: {
    winnerTitle: 'Disney’s KiteTails',
    category: 'Le plus gros coup dur concept art / réalisation',
  },
  '9jfàjH': {
    winnerTitle: 'Le compte Twitter de Vrogui',
    category: 'La plus grosse glissade de l’année',
  },
  kco9jfh: {
    winnerTitle: 'Allyyy',
    category: 'Le melon de l’année',
  },
  çJfn7h: {
    winnerTitle: 'Ed',
    category: 'Meilleur second rôle ',
  },
  'àKv!9': {
    winnerTitle: 'La bague de Raphy',
    category: 'Le drama de l’année',
  },
  '9jfbhGk': {
    winnerTitle: 'L’accouchement de Sandy en vidéo',
    category: 'La Mackerie de l’année',
  },
  '0!fj8j': {
    winnerTitle: 'La dégustation du Krusty Burger par le mec dégueulasse',
    category: 'Le pire produit food / la pire dégustation de l’année',
  },
  '8jf,c!': {
    winnerTitle: 'Arthur',
    category: 'La meilleure "mascotte à la con" de l’année',
  },
} as const;

export default Code;

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
