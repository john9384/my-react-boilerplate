import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Screen } from 'design-system/constants/Screen';
import { Box } from 'design-system/components/Box';
import { Text } from 'design-system/components/Typography';
import { themeActions } from 'styles/theme/slice';
import { selectedTheme } from 'styles/theme/slice/selectors';
import { selectSidebarVisibility } from 'app/layouts/slice/selector';
import {
  translations,
  useInternationalization,
} from 'locales/useInternationalization';
import { SideNavItem } from './_components/SideNavItem';
import { SideNavItemWithDropDown } from './_components/SideNavWithDropDown';
import { navigation } from 'app/navigation';
import { useWindowDimensions } from 'design-system/hooks';
import { useDelayMount } from 'app/hooks/useDelayMount';
import { Toggle } from 'design-system/components';
import { Spacing } from 'design-system/constants/Spacing';
import { Dimensions } from 'design-system/constants/Dimensions';

interface Props {}

export const Sidebar = React.memo((props: Props) => {
  const intl = useInternationalization();
  const sideBarVisible = useSelector(selectSidebarVisibility);
  const dispatch = useDispatch();
  const theme = useSelector(selectedTheme);
  const isDarkMode = theme === 'dark';
  const [toggleState, setToggleState] = React.useState(isDarkMode);

  React.useEffect(() => {
    setToggleState(isDarkMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const handleChange = e => {
    if (!toggleState) {
      dispatch(themeActions.changeTheme('dark'));
    } else {
      dispatch(themeActions.changeTheme('light'));
    }
    setToggleState(e.target.checked);
  };

  return (
    <Div mounted={sideBarVisible}>
      <Wrapper mounted={sideBarVisible}>
        <SideNavItem
          link={navigation.main.relativePath}
          iconName="layout-dashboard"
          text={intl.t(translations.layout.sidebar.home)}
        />
        <SideNavItemWithDropDown
          iconName="file-stack"
          label="Link with nest"
          options={[
            {
              link: '/link',
              label: 'Sub Link',
            },
          ]}
          sideBarVisible={sideBarVisible}
          onClick={() => {}}
        />

        <SideNavItem
          onClick={() => {}}
          iconName="settings"
          text={intl.t(translations.layout.sidebar.settings)}
          link="/link"
        />

        <ToggleDiv
          width={Dimensions.full}
          height={Dimensions.D48}
          justifyContent="center"
          alignItems="center"
        >
          <Box flexDirection="row" gap={Spacing.S16}>
            {sideBarVisible && <Text size="F14">Toggle Dark Mode</Text>}
            <Toggle checked={toggleState} onChange={handleChange} />
          </Box>
        </ToggleDiv>
      </Wrapper>
    </Div>
  );
});

const Div = styled.div<{ mounted: boolean }>`
  height: calc(100vh - 6rem);
  width: ${props => (props.mounted ? '25rem' : '6rem')};
  transition: width 500ms ease-in;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1000;
  padding-top: 1rem;
  background: ${({ theme }) => theme.color.background};
  @media (max-width: ${Screen.SMALL + 'px'}) {
    width: ${props => (props.mounted ? '25rem' : '0px')};
    position: absolute;
    z-index: 100000000000;
  }
`;

export const SidebarOverlay = styled.div<{ overlay: boolean }>`
  position: fixed;
  top: 6rem;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: calc(100vh - 6rem);
  background: ${props =>
    props.overlay ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
`;

const ToggleDiv = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const DesktopWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MobileWrapper = styled.div<{ mounted: boolean }>`
  width: ${props => (props.mounted ? '100%' : '0')};
  transition: all 0.5s;
  z-index: 1000;
`;

const Wrapper = ({ children, mounted }) => {
  const { width } = useWindowDimensions();
  const renderContent = useDelayMount(mounted, 100, 0);
  if (width <= Screen.SMALL) {
    return (
      <>
        {renderContent && (
          <MobileWrapper mounted={mounted}>{children}</MobileWrapper>
        )}
      </>
    );
  }
  return <DesktopWrapper>{children}</DesktopWrapper>;
};
