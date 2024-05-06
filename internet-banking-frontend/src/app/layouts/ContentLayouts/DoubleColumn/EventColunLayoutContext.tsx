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

export const EvenColumnLayoutContext = ({
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

  const Sub = React.useMemo(() => {
    const isMounted = subContent !== null;

    if (!subContent) return <SubContent></SubContent>;
    if (width < Screen.MEDIUM && isMounted) {
      return (
        <SubContentModal
          closeModal={() => {
            setSubContent(null);
          }}
          isMounted={subContents ? true : false}
        >
          {subContents[subContent]}
        </SubContentModal>
      );
    }

    return <SubContent>{subContents[subContent]}</SubContent>;
  }, [width, subContent, subContents]);

  return (
    <LayoutContextProvider
      value={{
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
