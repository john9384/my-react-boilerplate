import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { customMedia } from 'styles/media';
import { layoutActions } from 'app/layouts/slice';
import { Icon } from 'design-system/components/Icon';

interface Props {}

export const TopbarSidebarButton = React.memo((props: Props) => {
  const dispatch = useDispatch();

  return (
    <Wrapper onClick={() => dispatch(layoutActions.changeSidebarVisibility())}>
      <DesktopButton>
        <TopbarIcon>
          <Icon name="menu" />
        </TopbarIcon>
      </DesktopButton>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  height: 6rem;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  &:hover {
    background: ${({ theme }) => theme.color.hoverColor};
  }

  ${customMedia.lessThan('small')` 
    height: 6rem;
    width: fit-content;
  `}
`;

const TopbarIcon = styled.div`
  margin: 0;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 101;

  path {
    stroke: ${p => p.theme.color.text};
  }
`;

const DesktopButton = styled.span``;
