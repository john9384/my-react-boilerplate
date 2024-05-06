import React from 'react';
import styled from 'styled-components';
import { customMedia } from 'styles/media';
import { Colors } from 'design-system/constants/Colors';
import {
  translations,
  useInternationalization,
} from 'locales/useInternationalization';
import { Icon, IconDimension } from 'design-system/components';

export const TopbarNotification = React.memo(() => {
  const intl = useInternationalization();

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Wrapper>
      <TopbarNotificationMenu type="button" onClick={toggleProfile}>
        <NotificationCount>
          <p>10</p>
        </NotificationCount>
        <NotificationIcon>
          <Icon name="bell" color={Colors.PRIMARY} size={IconDimension.D24} />
        </NotificationIcon>
        <Text>{intl.t(translations.layout.topbar.notification)}</Text>
      </TopbarNotificationMenu>
      {isCollapsed && (
        <MenuBack
          type="button"
          aria-label="profile button"
          onClick={toggleProfile}
        />
      )}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 0;
`;

const TopbarNotificationMenu = styled.button`
  height: 100%;
  display: flex;
  gap: 1rem;
  cursor: pointer;
  position: relative;
  border-radius: 0;
  border: none;
  transition: all 0.3s;
  box-shadow: none;
  background-color: transparent;

  &:hover,
  &:focus,
  &:active,
  &:focus:active {
    background-color: ${p => p.theme.color.hoverColor};
  }

  &:focus {
    outline: none;
  }

  &:before {
    display: none;
  }
`;

const NotificationIcon = styled.div`
  margin: auto 0;
  border-radius: 50%;
  height: 21px;
  width: 21px;

  path {
    stroke: ${p => p.theme.color.text};
  }
`;

const Text = styled.p`
  margin: auto 0;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  display: none;
  color: ${p => p.theme.color.text};

  ${customMedia.greaterThan('xsm')`
    display: block; 
  `}
`;

const MenuBack = styled.button`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  border: none;
`;

const NotificationCount = styled.div`
  position: absolute;
  top: -1rem;
  left: 1.5rem;
  background-color: ${({ theme }) => theme.color.primary};
  width: 18px;
  height: 18px;
  border-radius: 50%;

  p {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    font-weight: bolder;
    color: ${Colors.WHITE};
    padding: 0;
  }
`;
