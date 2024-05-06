import { useWindowDimensions } from 'app/common/hooks/useWindowDimensions';
import React from 'react';
import styled from 'styled-components';
import { customMedia } from 'styles/media';
import { Screen } from 'design-system/constants/Screen';
import { SubContentModal } from '../_components/SubContentModal';

interface SubContentList {
  [key: string]: any;
}

interface Props {
  children: React.ReactNode;
  subContents: SubContentList;
  subContentToDisplay: keyof SubContentList | null;
  onCloseSubContent: () => void;
}

export const EvenColumnLayout = ({
  children,
  subContents,
  subContentToDisplay,
  onCloseSubContent,
}: Props) => {
  const { width } = useWindowDimensions();
  const isMounted = React.useMemo(
    () => subContentToDisplay && subContentToDisplay !== 'NONE',
    [subContentToDisplay],
  );

  return (
    <Wrapper>
      <MainContent>{children}</MainContent>
      {width > Screen.MEDIUM && (
        <SubContent>
          {subContentToDisplay && subContents[subContentToDisplay]}
        </SubContent>
      )}
      {width < Screen.MEDIUM && isMounted && (
        <SubContentModal closeModal={onCloseSubContent} isMounted>
          {subContentToDisplay && subContents[subContentToDisplay]}
        </SubContentModal>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  ${customMedia.lessThan('small')` 
  padding: 0;
  `}
`;

const MainContent = styled.div`
  flex: 1;
`;
const SubContent = styled.div`
  width: 45%;
  ${customMedia.lessThan('medium')` 
    width: 0;
  `}
`;
