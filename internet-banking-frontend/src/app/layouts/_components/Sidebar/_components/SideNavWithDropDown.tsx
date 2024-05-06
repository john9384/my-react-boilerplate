import styled from 'styled-components';
import { customMedia } from 'styles/media';
import { SideNavItem } from './SideNavItem';
import { IconName } from 'design-system/components/Icon';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { layoutActions } from 'app/layouts/slice';
import { Screen } from 'design-system/constants/Screen';
import { Colors } from 'design-system/constants';
import { useDelayMount } from 'app/hooks/useDelayMount';
import { useWindowDimensions } from 'design-system/hooks';

interface DropdownOptions {
  link: string;
  label: string;
}

interface Props {
  iconName: IconName;
  label: string;
  options: DropdownOptions[];
  sideBarVisible: boolean;
  onClick: (e?: any) => void;
}

export const SideNavItemWithDropDown = ({
  iconName,
  label,
  options,
  sideBarVisible,
  onClick,
}: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const [dropdownActive, setDropDownActive] = React.useState(false);
  const dropdownMountDelay = () => (sideBarVisible ? 100 : 600);
  const shouldRenderChild = useDelayMount(
    dropdownActive,
    dropdownMountDelay(),
    100,
  );

  const toggleDropdown = e => {
    navigate(options[0].link);
    if (width > Screen.MEDIUM) {
      dispatch(layoutActions.setVisibility(true));
    }
    setDropDownActive(!dropdownActive);
  };
  const onClickSideNavItem = e => {
    e.stopPropagation();
    onClick();
  };
  return (
    <Component onClick={toggleDropdown}>
      <SideNavItem
        onClick={onClickSideNavItem}
        iconName={iconName}
        text={label}
        isDropDown
        onDropdownToggle={() => setDropDownActive(!dropdownActive)}
      />
      {shouldRenderChild && sideBarVisible && (
        <SideNavItemDropdown mounted={dropdownActive}>
          {options.map(option => (
            <SideNavDropDownItem
              key={option.link}
              to={option.link}
              onClick={e => {
                e.stopPropagation();
              }}
              isActive={window.location.pathname === option.link}
            >
              {option.label}
            </SideNavDropDownItem>
          ))}
        </SideNavItemDropdown>
      )}
    </Component>
  );
};

const Component = styled.div`
  transition: height 1s;
  &:hover {
    cursor: pointer;
  }
`;

const SideNavItemDropdown = styled.div<{ mounted: boolean }>`
  width: 100%;
  opacity: ${props => (props.mounted ? '1' : '0')};
  transition: opacity 1s;
  padding: 1rem 0;
`;

const SideNavDropDownItem = styled(Link)<{ isActive?: boolean }>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 3rem;
  padding: 1rem 1.5rem 1rem 8rem;
  transition: all 0.2s;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.text};
  background: transparent;

  ${customMedia.lessThan('small')`
   column-gap: 2rem;
  `}
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
    background: ${({ theme }) => theme.color.hoverColor};
    color: ${({ theme }) => theme.color.primary};
  }
`;
