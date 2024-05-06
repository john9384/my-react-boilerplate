import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  title: string;
  path?: string;
  onClick: () => void;
}

export const TopbarMenuLink = memo((props: Props) => {
  if (!props.path) {
    return (
      <UnroutedMenuLink onClick={props.onClick}>
        <LinkIcon>{props.children}</LinkIcon>
        <LinkTitle>{props.title}</LinkTitle>
      </UnroutedMenuLink>
    );
  }

  return (
    <MenuLink to={props.path} onClick={props.onClick}>
      <LinkIcon>{props.children}</LinkIcon>
      <LinkTitle>{props.title}</LinkTitle>
    </MenuLink>
  );
});

const MenuLink = styled(Link)`
  display: flex;
  gap: 1rem;
  padding: 18px 29px;
  transition: all 0.3s;
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  color: ${p => p.theme.color.text};
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.color.primary};
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover {
    background-color: ${p => p.theme.color.hoverColor};

    &:before {
      opacity: 1;
    }
  }
`;

const UnroutedMenuLink = styled.span`
  display: flex;
  gap: 1rem;
  padding: 18px 29px;
  transition: all 0.3s;
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  color: ${p => p.theme.color.text};
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.color.primary};
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover {
    background-color: ${p => p.theme.color.hoverColor};

    &:before {
      opacity: 1;
    }
  }
`;

const LinkIcon = styled.span`
  /* font-size: 13px; */
  line-height: 13px;

  svg {
    height: 16px;
    width: 16px;
  }
`;

const LinkTitle = styled.p`
  display: flex;
  margin: 0;
  font-size: 14px;
  line-height: 16px;
`;
