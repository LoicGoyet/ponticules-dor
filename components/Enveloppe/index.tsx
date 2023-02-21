import JSConfetti from 'js-confetti';
import * as React from 'react';
import styled from 'styled-components';
import {Result} from '../../data/results';
import {fromNumberToPixels} from '../../utils/fromNumberToPixels';
import {fromNumberToSeconds} from '../../utils/fromNumberToSeconds';
import {getHypotenuse} from '../../utils/getHypotenuse';
import Card from '../Card';
import {unwrapDate} from '../../pages/[code]';

type Props = {
  className?: string;
  result: Result;
};

const Enveloppe = ({className, result}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [error, setError] = React.useState('');
  const jsConfetti = React.useRef<JSConfetti | null>(null);

  const handleOpenButton = (e: React.MouseEvent<HTMLDivElement>) => {
    setError('');
    const isAllowedToUnwrap = new Date().getTime() > unwrapDate.getTime();

    if (!isAllowedToUnwrap) {
      setError("Il n'est pas encore l'heure de révéler le gagnant !");
      return;
    }

    if (!jsConfetti.current) {
      jsConfetti.current = new JSConfetti();
    }
    e.preventDefault();
    setIsOpen(true);

    setTimeout(() => {
      jsConfetti.current?.addConfetti();
    }, (forefrontAnimationDuration + letterAnimationDuration) * 1000);
  };

  return (
    <Wrapper>
      <Header>
        Les étapes pour remettre le Ponticule d&apos;Or :
        <ol>
          <li>
            Tristan vous présentera en tant que remettant du prix «{result.category}».
          </li>
          <li>Votre discour</li>
          <li>
            <i>Pour la categorie «{result.category}», les nommé·e·s sont :</i>
          </li>
          <li>
            <i>
              Et la·le lauréat·e du Ponticule d&apos;Or pour la catégorie «
              {result.category}» est :
            </i>
          </li>
          <li>Ouvrez l&apos;enveloppe et annoncez le nom du lauréat</li>
        </ol>
      </Header>
      <EnvWrapper className={className} role="button" onClick={handleOpenButton}>
        <AbsoluteWrapper>
          <Forefront
            style={{
              '--rotation': isOpen ? '-180deg' : '0deg',
              '--z-index': isOpen ? 1 : 3,
            }}
          >
            <ForefrontLabel style={{'--z-index': isOpen ? 3 : 4}}>
              {result.category}
            </ForefrontLabel>
            <ForefrontTop />
          </Forefront>
          <MiddlePlan>
            <MiddlePlanBottom />
            <MiddlePlanLeft />
            <MiddlePlanRight />
          </MiddlePlan>
          <Letter
            style={{'--translateY': isOpen ? '-60%' : '0%'}}
            header={result.category}
          >
            <Winner>{result.winnerTitle}</Winner>
          </Letter>
        </AbsoluteWrapper>
      </EnvWrapper>
      {!!error ? <Error>{error}</Error> : null}
    </Wrapper>
  );
};

const width = 500;
const height = 300;
const forefrontAnimationDuration = 3;
const letterAnimationDuration = 2;

export default Enveloppe;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100vw;
`;

const Header = styled.div`
  color: grey;
  width: 100%;
  text-align: center;
  font-size: 0.8em;
  margin: 0 auto 2rem;
  padding: 0 1rem;

  ol {
    text-align: left;
    margin-top: 1rem;
  }
`;

const Error = styled.div`
  top: 100%;
  margin-top: 2rem;
  color: white;
  width: 100%;
  text-align: center;
`;

const EnvWrapper = styled.div`
  --forefront-animation-duration: ${fromNumberToSeconds(forefrontAnimationDuration)};
  --letter-animation-duration: ${fromNumberToSeconds(letterAnimationDuration)};
  background-color: #ed4135;
  width: ${fromNumberToPixels(width)};
  height: ${fromNumberToPixels(height)};
  position: relative;
  cursor: pointer;
  margin: auto;
  max-width: 100%;
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
  width: ${fromNumberToPixels(width)};
  height: ${fromNumberToPixels(height)};
  left: calc(50% - ${fromNumberToPixels(width / 2)});
  top: calc(50% - ${fromNumberToPixels(height / 2)});
`;

const sideSize = getHypotenuse(width / 2, height / 2);

const MiddlePlan = styled.div`
  position: absolute;
  width: ${fromNumberToPixels(width)};
  height: ${fromNumberToPixels(height)};
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 2;
`;

const Forefront = styled.div<{
  style: {
    '--rotation': `${number}deg`;
    '--z-index': number;
  };
}>`
  position: absolute;
  width: ${fromNumberToPixels(width)};
  height: ${fromNumberToPixels(height / 2)};
  top: 0;
  left: 0;
  z-index: var(--z-index);
  overflow: hidden;
  transform: rotate3d(1, 0, 0, var(--rotation));
  transform-origin: top center;
  transition-property: transform, z-index;
  transition-timing-function: ease-in-out;
  transition-delay: 0ms, var(--forefront-animation-duration);
  transition-duration: var(--forefront-animation-duration), 0ms;
  will-change: transform, z-index;
  transform-style: preserve-3d;
`;

const ForefrontLabel = styled.div<{style: {'--z-index': number}}>`
  --width: 10rem;
  position: relative;
  width: var(--width);
  font-size: 0.7rem;
  top: 50%;
  left: 50%;
  padding: 0.25rem;
  transform: translate(calc(var(--width) / -2), -100%);
  z-index: var(--z-index);
  text-align: center;
  color: black;
  backface-visibility: hidden;
  transition-property: z-index;
  transition-timing-function: ease-in-out;
  transition-delay: 0ms;
  transition-duration: var(--forefront-animation-duration);
`;

const ForefrontTop = styled.div`
  --size: 283px;

  position: absolute;
  background-color: #de3f34;
  width: var(--size);
  height: var(--size);
  top: calc(var(--size) * -0.5);
  left: 50%;
  transform: translateX(-50%) translateY(0) rotate(45deg) skew(-16deg, -16deg);
  border-radius: 8px;
  z-index: 3;
  box-shadow: 0 0 4px rgb(0 0 0 / 20%);
`;

const MiddlePlanBottom = styled.div`
  position: absolute;
  background-color: #ed4135;
  width: ${fromNumberToPixels(sideSize * 1.2)};
  height: ${fromNumberToPixels(sideSize * 1.2)};
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-10%) rotate(45deg) skew(-16deg, -16deg);
  border-radius: 8px;
  z-index: 1;
`;

const MiddlePlanLeft = styled.div`
  position: absolute;
  background-color: #f34e43;
  width: ${fromNumberToPixels(sideSize)};
  height: ${fromNumberToPixels(sideSize)};
  top: 0;
  left: 0;
  transform: translateX(-50%) rotate(45deg) skew(-16deg, -16deg);
  border-radius: 8px;
  z-index: 0;
`;

const MiddlePlanRight = styled.div`
  position: absolute;
  background-color: #f34e43;
  width: ${fromNumberToPixels(sideSize)};
  height: ${fromNumberToPixels(sideSize)};
  top: 0;
  left: 100%;
  transform: translateX(-50%) rotate(45deg) skew(-16deg, -16deg);
  border-radius: 8px;
  z-index: 0;
`;

const Letter = styled(Card)<{
  style: {
    '--translateY': `${number}%`;
  };
}>`
  --width: ${fromNumberToPixels(width - 20)};
  --height: ${fromNumberToPixels(height - 20)};

  position: absolute;
  width: var(--width);
  height: var(--height);
  top: calc(50% - ${fromNumberToPixels(height / 2 - 10)});
  left: calc(50% - ${fromNumberToPixels(width / 2 - 10)});
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(var(--translateY));
  transition-property: transform;
  transition-timing-function: ease-in-out;
  transition-delay: var(--forefront-animation-duration);
  transition-duration: var(--letter-animation-duration);
  will-change: transform;
`;

const Winner = styled.div`
  max-width: 100vw;
  margin: auto;
  padding: 0 var(--padding);
  font-size: clamp(0.5rem, 4vw + 0.5rem, 1.25rem);
`;
