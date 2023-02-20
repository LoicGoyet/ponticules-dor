import * as React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button = ({className, children, onClick}: Props) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  padding: 0.5rem 1.25rem;
  border: 1px solid transparent;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  cursor: pointer;
  color: #fff;
  background-color: #ed4135;
  border-color: #ed4135;

  &:hover {
    background-color: #cd2e23;
    border-color: #cd2e23;
  }
`;
