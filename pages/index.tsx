import type {NextPage} from 'next';
import styled from 'styled-components';
import Enveloppe from '../components/Enveloppe';

const Home: NextPage = () => {
  return (
    <Main>
      <Enveloppe winnerTitle="« Rêvons... et le Monde s'Illumine est un mauvais show car il compte seulement XX danseurs et personnages » éParcurien" />
    </Main>
  );
};

export default Home;

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
