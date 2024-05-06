import styled from 'styled-components';
import { motion as m } from 'framer-motion';
import { customMedia } from 'styles/media';

interface IPageContent {
  size: 'full' | 'content';
  children: any;
}

export const Div = styled(m.div)<IPageContent>`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: ${({ size }) => {
    switch (size) {
      case 'content':
        return '100rem';
      case 'full':
        return '100%';
      default:
        return '100%';
    }
  }};
  height: 100%;
  margin: 0 auto;
  padding: 1.6rem 3.2rem;
  ${customMedia.lessThan('medium')` 
    padding:1.6rem 2.4rem;
    gap:1.6rem;
  `}
  ${customMedia.lessThan('small')` 
    padding: 1.6rem 0;
    gap: 0.8rem;
  `}
`;

export const PageContent = (props: IPageContent) => {
  return (
    <Div
      {...props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </Div>
  );
};
