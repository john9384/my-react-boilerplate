import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import { Header2, Text } from 'design-system/components/Typography';
import { Screen } from 'design-system/constants/Screen';
import { Icon, IconDimension, IconName } from 'design-system/components/Icon';
import { customMedia } from 'styles/media';
import { selectedTheme } from 'styles/theme/slice/selectors';
import { Colors } from 'design-system/constants';
import { useWindowDimensions } from 'design-system/hooks';
import BackText from 'design-system/components/BackText';

export interface NavItemType {
  title: string;
  link: string | Function;
  iconName: IconName;
  isActive?: boolean;
}

interface Props {
  pageTitle?: string;
  backText?: string;
  backAction?: () => void;
  removeBackButton?: boolean;
  navItems?: NavItemType[];
  children?: React.ReactNode;
}

export const NavHeader = ({
  pageTitle,
  backText,
  backAction,
  removeBackButton,
  navItems,
  children,
}: Props) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const selectedPage =
    navItems &&
    (navItems.find(
      item => item.link === window.location.pathname,
    ) as NavItemType);
  const { width } = useWindowDimensions();
  const themeValue = useSelector(selectedTheme);

  const toggleDropdown = () => {
    setIsCollapsed && setIsCollapsed(!isCollapsed);
  };

  const backButtonProps = {
    ...(backText && { text: 'Back' }),
    ...(backAction && { onClickAction: backAction }),
  };
  return (
    <Wrapper>
      <Left>
        {!removeBackButton && <BackText {...backButtonProps} />}
        {pageTitle && <Header2 colorType="black">{pageTitle}</Header2>}
      </Left>
      <Right>
        {width <= Screen.SMALL && navItems && navItems.length > 0 && (
          <DropdownHead onClick={toggleDropdown}>
            <Text colorType="black">{selectedPage?.title}</Text>
            <Icon name="chevron-down" size={IconDimension.D8} />
          </DropdownHead>
        )}
        <NavigationItem
          width={width}
          navItems={navItems}
          themeValue={themeValue}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        {children}
      </Right>
    </Wrapper>
  );
};

export const NavigationItem = ({
  width,
  navItems,
  themeValue,
  isCollapsed,
  setIsCollapsed,
}) => {
  const navigate = useNavigate();
  if (width > Screen.SMALL) {
    return (
      <NavList>
        {navItems &&
          navItems.map((item, index) => {
            const isActive =
              item.isActive || window.location.pathname === item.link;

            return (
              <NavItem
                key={index}
                onClick={() => {
                  typeof item.link === 'string'
                    ? navigate(item.link)
                    : item.link();
                }}
              >
                <Icon
                  name={item.iconName}
                  size={IconDimension.D16}
                  color={isActive ? Colors.PRIMARY : undefined}
                />
                <NavText size="F12" isActive={isActive} colorType="black">
                  {item.title}
                </NavText>
              </NavItem>
            );
          })}
      </NavList>
    );
  }
  return (
    <DropdownMenuWrap isOpen={isCollapsed}>
      <DropdownMenu>
        {navItems &&
          navItems.map((item, index) => {
            const isActive =
              window.location.pathname === item.link || item.isActive;
            return (
              <NavItem
                key={index}
                onClick={() => {
                  typeof item.link === 'string'
                    ? navigate(item.link)
                    : item.link();
                  setIsCollapsed && setIsCollapsed(!isCollapsed);
                }}
              >
                <Icon
                  name={item.iconName}
                  size={IconDimension.D16}
                  color={isActive ? Colors.PRIMARY : undefined}
                />
                <NavText size="F12" isActive={isActive}>
                  {item.title}
                </NavText>
              </NavItem>
            );
          })}
      </DropdownMenu>
    </DropdownMenuWrap>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  height: 4.8rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
  background-color: ${({ theme }) => theme.color.bodyBackground};
  ${customMedia.lessThan('small')` 
  padding: 0;
  `};
`;

const Left = styled.div`
  background: transparent;
  display: flex;
  gap: 1rem;
`;
const Right = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;
const NavList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavItem = styled.span`
  height: 100%;
  padding: 0 2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  ${customMedia.lessThan('small')` 
  padding: 1rem 2rem;
  `}
`;

const NavText = styled(Text)<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.primary : theme.color.text};
`;
const DropdownMenuWrap = styled(Collapse)`
  z-index: 101;
  position: absolute;
  right: 0;
  width: 20rem;
  font-size: 11px !important;

  ${customMedia.lessThan('xsm')`
    left: -126px;
  `}
`;

const DropdownMenu = styled.div`
  border-radius: 10px;
  border: none;
  padding: 2rem 2rem;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  margin-top: 15rem;
  background: ${({ theme }) => theme.color.background};

  button {
    padding: 0;

    &:hover {
      background-color: ${({ theme }) => theme.color.hoverColor};
    }
  }

  &:before {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: -7px;
    transform: rotate(45deg);
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    margin-top: 0;
    background: ${({ theme }) => theme.color.background};
    content: '';
  }

  *:focus {
    outline: none;
  }

  ${customMedia.greaterThan('xsm')`
    width: 100%;
  `}
`;
const DropdownHead = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
  align-items: center;
`;
