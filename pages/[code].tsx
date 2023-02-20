import type {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import styled from 'styled-components';
import Enveloppe from '../components/Enveloppe';
import WelcomeLetter from '../components/WelcomeLetter';
import {getResult, Result} from '../data/results';

export const unwrapDate = new Date('2023-02-23T21:00:00.000+01:00');

export const getServerSideProps: GetServerSideProps<{
  result: Result;
}> = async (context) => {
  const {code} = context.query;

  try {
    const result = getResult(code);
    return {
      props: {
        result,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

const Code = ({result}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Main>
      <WelcomeLetter result={result} />
      <Enveloppe result={result} />
    </Main>
  );
};

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
