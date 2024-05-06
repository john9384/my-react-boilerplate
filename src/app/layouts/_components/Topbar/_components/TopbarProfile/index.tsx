import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'reactstrap';
import {
  useInternationalization,
  translations,
} from 'locales/useInternationalization';
import { customMedia } from 'styles/media';
import { TopbarMenuLink } from '../TopbarMenuLink';
import { Image } from 'design-system/components';
import { navigation } from 'app/navigation';
import { Colors } from 'design-system/constants';
import Avatar from 'assets/images/9440461.jpg';
import { Icon, IconDimension } from 'design-system/components';

export const TopbarProfile = React.memo(() => {
  const intl = useInternationalization();

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

  const logout = () => {
    toggleProfile();
  };

  return (
    <Wrapper>
      <TopbarAvatar type="button" onClick={toggleProfile}>
        <Logo>
          <Image objectFit="cover" src={Avatar} />
        </Logo>
        <AvatarName>John Doe</AvatarName>
        <DropdownIcon>
          <Icon
            name={isCollapsed ? 'chevron-up' : 'chevron-down'}
            size={IconDimension.D8}
          />
        </DropdownIcon>
      </TopbarAvatar>
      {isCollapsed && (
        <MenuBack
          type="button"
          aria-label="profile button"
          onClick={toggleProfile}
        />
      )}
      <MenuWrap isOpen={isCollapsed}>
        <TopbarMenu>
          <TopbarMenuLink
            title={intl.t(translations.layout.topbar.profile)}
            path={navigation.main.relativePath}
            onClick={toggleProfile}
          >
            <Icon name="user" color={Colors.GRAY600} />
          </TopbarMenuLink>

          <TopbarMenuLink
            title={intl.t(translations.layout.topbar.logout)}
            onClick={logout}
          >
            <Icon name="log-out" color={Colors.GRAY600} />
          </TopbarMenuLink>
        </TopbarMenu>
      </MenuWrap>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 0;
`;

const TopbarAvatar = styled.button`
  height: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
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

const AvatarName = styled.p`
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

const Logo = styled.span`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.bodyBackground};
`;

const DropdownIcon = styled.div`
  margin: 0 0 0 5px;
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

const MenuWrap = styled(Collapse)`
  z-index: 101;
  position: absolute;
  right: 0;
  width: 100%;
  min-width: 250px;
  margin-top: 10px;
`;

const TopbarMenu = styled.div`
  border-radius: 10px;
  border: none;
  padding: 15px 0;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  margin-top: 0;
  background: ${p => p.theme.color.background};

  button {
    padding: 0;

    &:hover {
      background-color: ${p => p.theme.color.hoverColor};
    }
  }

  &:before {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 100px;
    top: -7px;
    transform: rotate(45deg);
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    margin-top: 0;
    background: ${p => p.theme.color.background};
    content: '';
    @media screen and (max-width: 600px) {
      left: 150px;
    }
  }

  *:focus {
    outline: none;
  }
`;
