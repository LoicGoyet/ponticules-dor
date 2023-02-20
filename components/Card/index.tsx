import * as React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  children: React.ReactNode;
  header?: React.ReactNode;
  style?: React.CSSProperties;
};

const Card = ({className, children, header, style}: Props) => {
  return (
    <Wrapper className={className} style={style}>
      {header && <Header>{header}</Header>}
      {children}
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  --padding: 15px;

  position: relative;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.25rem;
  border-radius: 8px;
  padding: calc(var(--padding) * 2);

  &::before {
    content: '';
    position: absolute;
    width: calc(var(--width) - calc(var(--padding) * 2));
    height: calc(var(--height) - calc(var(--padding) * 2));
    border: 2px solid;
  }
`;

const Header = styled.div`
  position: absolute;
  top: var(--padding);
  font-size: 0.6rem;
  letter-spacing: 0.025rem;
  transform: translateY(-50%);
  background-color: white;
  padding: 0 0.5rem;
`;
