import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import { customMedia } from 'styles/media';
import { TopbarProfile } from './_components/TopbarProfile';
import { TopbarSidebarButton } from './_components/TopbarSidebarButton';
import { Image } from 'design-system/components';
import { Spacing } from 'design-system/constants/Spacing';
import { Dimensions } from 'design-system/constants/Dimensions';
import { TopbarNotification } from './_components/TopbarNotification';

interface Props {
  isSideMenu?: boolean;
}

export const Topbar = React.memo(({ isSideMenu }: Props) => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper isSideMenu={isSideMenu !== false}>
      <Left>
        {isSideMenu !== false && <TopbarSidebarButton />}
        <Logo to="/">
          <Image
            src={theme.color.logo}
            width={Dimensions.D150}
            objectFit="fill"
          />
        </Logo>
      </Left>
      <Right>
        <TopbarNotification />
        <TopbarProfile />
      </Right>
    </Wrapper>
  );
});

const Wrapper = styled.div<{ isSideMenu: boolean }>`
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  padding-left: ${({ isSideMenu }) => (isSideMenu ? Spacing.S0 : Spacing.S32)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  background: ${p => p.theme.color.background};
  padding-right: 3rem;

  ${customMedia.lessThan('small')` 
    padding: 0  1rem;
  `}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: max-content;

  ${customMedia.lessThan('small')` 
    gap: 1rem;
  `}
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  width: max-content;
  gap: 5rem;
  ${customMedia.lessThan('small')`
  gap: 2rem;
  `}
`;

const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 600px) {
    img {
      width: 15rem !important;
    }
  }
`;
