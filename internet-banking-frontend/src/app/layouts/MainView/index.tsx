import React, { memo } from 'react';
import styled from 'styled-components';
import { Sidebar, SidebarOverlay } from '../_components/Sidebar';
import { Topbar } from '../_components/Topbar';
import { customMedia } from 'styles/media';
import { motion as m } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarVisibility } from '../slice/selector';
import { layoutActions } from '../slice';
import { Screen } from 'design-system/constants/Screen';
import { useAppStorageCleanUp } from 'app/hooks/useAppStoreageCleanUp';
import { useWindowDimensions } from 'design-system/hooks';

interface Props {
  children: React.ReactNode;
}

export const MainView = memo(({ children }: Props) => {
  useAppStorageCleanUp();

  const sidebarvisible = useSelector(selectSidebarVisibility);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  return (
    <Body>
      <Topbar />
      <View>
        <Sidebar />
        {sidebarvisible && width <= Screen.SMALL && (
          <SidebarOverlay
            overlay={sidebarvisible}
            onClick={() => dispatch(layoutActions.changeSidebarVisibility())}
          ></SidebarOverlay>
        )}
        <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {children}
        </Content>
      </View>
    </Body>
  );
});

const Body = styled.div`
  max-width: 100vw;
`;

const View = styled.div`
  display: flex;
  margin-top: 6rem;
  height: calc(100dvh - 60px);
`;

const Content = styled(m.div)`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  ${customMedia.lessThan('small')` padding: 0 1rem;`}
`;
