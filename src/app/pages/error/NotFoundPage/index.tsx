import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Text } from 'design-system/components/Typography/Text';
import { Button } from 'design-system/components/Button';
import { Header3 } from 'design-system/components/Typography/Header3';
import {
  translations,
  useInternationalization,
} from 'locales/useInternationalization';
import { Box } from 'design-system/components/Box';
import { customMedia } from 'styles/media';

export function NotFoundPage() {
  const intl = useInternationalization();
  const navigate = useNavigate();
  return (
    <MainWrapper>
      <ImageBox></ImageBox>
      <TextBox>
        <Title>{intl.t(translations.error.notFound)}</Title>
        <SubTitle>{intl.t(translations.error.pageNotFound)}</SubTitle>
      </TextBox>
      <ButtonWrap type="primary" width="content" onClick={() => navigate(-1)}>
        {intl.t(translations.error.goBack)}
      </ButtonWrap>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 600px;
  margin: 0 auto;
  gap: 30px;
  ${customMedia.lessThan('small')`
  padding: 1.6rem;
  width:350px
  `}
`;

const ImageBox = styled(Box)`
  max-width: 222px;
  height: 148px;
`;

const TextBox = styled(Text)``;

const Title = styled(Header3)`
  font-weight: 700;
  font-size: 32px;
  color: #000000;
  line-height: 41.66px;
  text-align: center;
  ${customMedia.lessThan('small')`
    text-align: center
  `}
`;

const SubTitle = styled(Text)`
  font-size: 20.18px;
  font-weight: 400;
  line-height: 26.27px;
  text-align: center;
  color: #808080;
`;

const ButtonWrap = styled(Button)`
  margin-top: 20px;
`;
