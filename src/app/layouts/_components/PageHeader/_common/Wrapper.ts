import styled from 'styled-components';
import { customMedia } from 'styles/media';

export const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${customMedia.lessThan('small')` 
  padding: 0;
  `}
`;
