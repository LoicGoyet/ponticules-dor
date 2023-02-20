import JSConfetti from 'js-confetti';
import * as React from 'react';
import styled from 'styled-components';
import {fromNumberToPixels} from '../../utils/fromNumberToPixels';
import {fromNumberToSeconds} from '../../utils/fromNumberToSeconds';
import {getHypotenuse} from '../../utils/getHypotenuse';
import Card from '../Card';

type Props = {
  className?: string;
  winnerTitle: string;
  category: string;
};

const Enveloppe = ({className, winnerTitle, category}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const jsConfetti = React.useRef<JSConfetti | null>(null);

  const handleOpenButton = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <React.Fragment>
      <Wrapper className={className} role="button" onClick={handleOpenButton}>
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
        <Letter style={{'--translateY': isOpen ? '-65%' : '0%'}} header={category}>
          {winnerTitle}
        </Letter>
      </Wrapper>
    </React.Fragment>
  );
};

const width = 500;
const height = 300;
const forefrontAnimationDuration = 3;
const letterAnimationDuration = 2;

export default Enveloppe;

const Wrapper = styled.div`
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
