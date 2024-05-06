import { useWindowDimensions } from 'app/common/hooks/useWindowDimensions';
import React from 'react';
import styled from 'styled-components';
import { customMedia } from 'styles/media';
import { Screen } from 'design-system/constants/Screen';
import { SubContentModal } from '../_components/SubContentModal';
import { LayoutContextProvider } from '../layoutContext';

interface SubContentList {
  [key: string]: any;
}

interface Props {
  children: React.ReactNode;
  subContents: SubContentList;
  defaultContent?: string;
}

export const OddColumnsLayout = ({
  children,
  subContents,
  defaultContent,
}: Props) => {
  type SubContentType = keyof typeof subContents;
  const [subContentLoading, setSubContentLoading] = React.useState(false);
  const [subContent, setSubContent] = React.useState<SubContentType | null>(
    defaultContent || null,
  );

  const [data, setData] = React.useState(null);
  const { width } = useWindowDimensions();
  const showOverlay = width <= Screen.MEDIUMPLUS;

  const Sub = React.useMemo(() => {
    const isMounted = subContent !== null;

    if (!subContent) return null;
    if (showOverlay && isMounted) {
      return (
        <SubContentModal
          closeModal={() => {
            setSubContent(null);
          }}
          isMounted={isMounted}
        >
          {subContents[subContent]}
        </SubContentModal>
      );
    }

    return <SubContent>{subContents[subContent]}</SubContent>;
  }, [showOverlay, subContent, subContents]);

  return (
    <LayoutContextProvider
      value={{
        subContent,
        setSubContent,
        data,
        setData,
        subContentLoading,
        setSubContentLoading,
      }}
    >
      <Wrapper>
        <MainContent>{children}</MainContent>
        {Sub}
      </Wrapper>
    </LayoutContextProvider>
  );
};

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  gap: 2rem;
  max-height: 100%;
  overflow-y: hidden;
  ${customMedia.lessThan('small')` 
  padding: 0;
  `};
`;

const MainContent = styled.div`
  flex: 1;
  padding-bottom: 10rem;
  overflow: auto;

  ${customMedia.greaterThan('mediumplus')`
  max-width: 60%;
  `}
`;

const SubContent = styled.div`
  width: 0;
  overflow: auto;
  ${customMedia.greaterThan('mediumplus')` 
    width: 38%;
  `}
`;
