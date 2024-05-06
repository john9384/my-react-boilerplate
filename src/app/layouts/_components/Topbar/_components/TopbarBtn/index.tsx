import React, { memo } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

export const TopbarBtn = memo((props: Props) => {
  return (
    <Button type={props.type} onClick={props.onClick}>
      {props.children}
    </Button>
  );
});

const Button = styled.button`
  width: 60px;
  height: 100%;
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:focus {
    outline: none;
  }
`;
