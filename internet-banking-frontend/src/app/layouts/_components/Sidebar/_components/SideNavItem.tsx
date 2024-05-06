import React from 'react';
import { Icon, IconDimension, IconName } from 'design-system/components/Icon';
import styled from 'styled-components';
import { Colors } from 'design-system/constants/Colors';
import { customMedia } from 'styles/media';
import { useSelector } from 'react-redux';
import { selectSidebarVisibility } from 'app/layouts/slice/selector';
import { selectedTheme } from 'styles/theme/slice/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDelayMount } from 'app/hooks/useDelayMount';

interface Props {
  iconName: IconName;
  text: string;
  children?: React.ReactNode;
  link?: string;
  isDropDown?: boolean;
  onClick?: (e?: any) => void;
  onDropdownToggle?: () => void;
}

export const SideNavItem = ({
  children,
  iconName,
  link,
  text,
  onClick,
  isDropDown,
  onDropdownToggle,
}: Props) => {
  const sideBarVisible = useSelector(selectSidebarVisibility);
  const shouldRenderChild = useDelayMount(sideBarVisible, 400, 300);
  const navigate = useNavigate();
  const iconActiveColor = Colors.PRIMARY;
  const location = useLocation();
  const isActive = location.pathname === link;
  return (
    <Wrapper
      onClick={() => {
        link && navigate(link);
      }}
      isActive={isActive}
    >
      <ItemIcon>
        <Icon
          name={iconName}
          color={isActive ? iconActiveColor : undefined}
          size={IconDimension.D16}
        />
      </ItemIcon>
      {shouldRenderChild && <ItemText status={isActive}>{text}</ItemText>}
      {isDropDown && sideBarVisible && (
        <IconDiv
          onClick={e => {
            e.stopPropagation();
            onDropdownToggle && onDropdownToggle();
          }}
        >
          <Icon
            name={isActive ? 'chevron-up' : 'chevron-down'}
            size={IconDimension.D8}
          />
        </IconDiv>
      )}
      {children && children}
      {!sideBarVisible && <FloatingText className="float">{text}</FloatingText>}
    </Wrapper>
  );
};

export const Wrapper = styled.div<{ isActive?: boolean }>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 3rem;
  padding: 1rem 1.6rem;
  transition: all 0.5s;

  ${({ isActive, theme }) => {
    if (isActive)
      return `
        border-left: 2px solid ${theme.color.primary};
        background: ${Colors.GRAY200};
        background: ${theme.color.hoverColor};
        color: ${theme.color.primary};
      `;
  }}
  &:hover {
    border-left: 2px solid ${({ theme }) => theme.color.primary};
    background: ${Colors.GRAY200};
    background: ${({ theme }) => theme.color.hoverColor};
    color: ${({ theme }) => theme.color.primary};
    cursor: pointer;
  }

  &:hover > .float {
    display: flex;
    background: ${({ theme }) => theme.color.hoverColor};
  }

  ${customMedia.lessThan('small')`
   column-gap: 2rem;
  `}
  position: relative;
`;

const ItemIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemText = styled.span<{ status?: boolean }>`
  font-size: 1.4rem;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  color: ${({ status, theme }) =>
    status ? theme.color.primary : theme.color.text};
`;

const FloatingText = styled.span`
  position: absolute;
  left: 56px;
  top: 0;
  height: 100%;
  width: 20rem;
  color: ${({ theme }) => theme.color.primary};
  display: none;
  align-items: center;
  font-size: 1.4rem;
  background-color: ${Colors.GRAY200};
  overflow-x: hidden;
  transition: display 0.5s;
`;

const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
