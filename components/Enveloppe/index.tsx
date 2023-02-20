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
        <Forefront
          style={{
            '--rotation': isOpen ? '-180deg' : '0deg',
            '--z-index': isOpen ? 1 : 3,
          }}
        >
          <ForefrontTop />
        </Forefront>
        <MiddlePlan>
          <MiddlePlanBottom />
          <MiddlePlanLeft />
          <MiddlePlanRight />
        </MiddlePlan>
        <Letter
          style={{'--translateY': isOpen ? '-65%' : '0%'}}
          header={result.category}
        >
          {result.winnerTitle}
        </Letter>
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
`;

const Header = styled.div`
  position: absolute;
  bottom: 100%;
  margin-bottom: 2rem;
  color: grey;
  width: 100%;
  text-align: center;
  font-size: 0.8em;
  left: -4rem;
  right: -4rem;
  width: calc(100% + 8rem);

  ol {
    text-align: left;
    margin-top: 1rem;
  }
`;

const Error = styled.div`
  position: absolute;
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
