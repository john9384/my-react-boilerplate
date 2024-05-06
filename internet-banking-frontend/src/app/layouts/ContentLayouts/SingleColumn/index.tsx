import { Card } from 'design-system/components/Card';
import styled from 'styled-components';
import { customMedia } from 'styles/media';

interface Props {
  children: React.ReactNode;
  header?: any;
  center?: boolean;
}

export const SingleColumnView = ({ children, header, center }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 200rem;
  gap: 1.6rem;
  margin: 0 auto;
  ${customMedia.lessThan('small')` 
    padding: 0;
  `}
`;

export const SingleColumnViewPageCard = styled(Card)`
  flex: 1;
  max-width: 200rem;
  overflow-y: auto;
  ${customMedia.lessThan('small')` 
    padding: 1rem;
  `}
`;
