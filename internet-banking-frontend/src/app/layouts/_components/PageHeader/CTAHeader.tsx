import { BackText } from 'design-system/components/BackText';
import { Header2 } from 'design-system/components/Typography';
import styled from 'styled-components';
import { Button } from 'design-system/components/Button';
import { Wrapper } from './_common/Wrapper';
import { Screen } from 'design-system/constants/Screen';
import React from 'react';

interface Props {
  title?: string;
  ctaText?: string;
  isLoading?: boolean;
  backAction?: () => void;
  ctaAction?: () => void;
  optionComponent?: React.ReactNode;
}

export const CTAHeader = ({
  title,
  ctaText,
  ctaAction,
  isLoading,
  optionComponent,
  backAction,
}: Props) => {
  return (
    <Wrapper>
      <Left>
        <BackText onClickAction={backAction} />
        {title && <HeaderText colorType="black">{title}</HeaderText>}
      </Left>
      {optionComponent ? (
        <Right>{optionComponent}</Right>
      ) : (
        <Right>
          {ctaText && (
            <Button
              type="primary"
              disabled={isLoading || false}
              width="content"
              onClick={ctaAction}
            >
              {isLoading ? 'Loading...' : ctaText}
            </Button>
          )}
        </Right>
      )}
    </Wrapper>
  );
};

const HeaderText = styled(Header2)`
  @media (max-width: ${Screen.SMALL}px) {
    font-size: 1.8rem;
  }
`;

const Left = styled.div`
  background: transparent;
  display: flex;
  gap: 2rem;
  align-items: center;
`;
const Right = styled.div`
  background: transparent;
`;
