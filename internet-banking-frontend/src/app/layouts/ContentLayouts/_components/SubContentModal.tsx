import React from 'react';
import styled from 'styled-components';

export const SubContentModal = ({ children, closeModal, isMounted }) => {
  return (
    <OverlayBackground isMounted={isMounted}>
      <ClearDiv onClick={closeModal} />
      <SubWrapper>{children}</SubWrapper>
    </OverlayBackground>
  );
};

const OverlayBackground = styled.div<{ isMounted: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isMounted }) => (isMounted ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1100;
`;

const ClearDiv = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const SubWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
