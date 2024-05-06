import styled from 'styled-components';
import {
  useInternationalization,
  translations,
} from 'locales/useInternationalization';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Box, CopyToClipboard, Header3, Text } from 'design-system/components';

export const AppErrorBoundaryPage = () => {
  const intl = useInternationalization();
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <MainWrapper>
      <ImageBox></ImageBox>
      <Title>{intl.t(translations.error.oops)}</Title>
      <TextBox>
        <SubTitle>
          {intl.t(translations.error.reload)}{' '}
          <LinkWrap>
            <CopyToClipboard text="support@test.com" />
          </LinkWrap>
        </SubTitle>
      </TextBox>
      <ButtonWrap>
        <Button width="full" height="D50" onClick={handleBack}>
          {intl.t(translations.common.back)}
        </Button>
        <Button width="full" height="D50" onClick={handleRefresh}>
          {intl.t(translations.common.refresh)}
        </Button>
      </ButtonWrap>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 600px;
  margin: 0 auto;
  gap: 10px;
  @media screen and (max-width: 500px) {
    padding: 1.6rem;
    width: 350px;
  }
`;

const ImageBox = styled(Box)`
  max-width: 222px;
  height: 148px;
`;

const TextBox = styled(Text)`
  width: 461px;
  height: 112px;

  @media screen and (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
    width: 275px;
    height: 100px;
  }
`;

const Title = styled(Header3)`
  font-weight: 500;
  font-size: 28px;
  color: #000000;
  line-height: 36.46px;
  text-align: center;
  @media screen and (max-width: 500px) {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 23.44px;
    width: 275px;
    height: 46px;
  }
`;

const SubTitle = styled(Text)`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  color: #808080;
  padding-top: 6px;
  @media screen and (max-width: 500px) {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    width: 300px;
    font-weight: 400;
    text-align: center;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 50%;
  margin-top: 20px;
  gap: 10px;
  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

const LinkWrap = styled.a`
  color: #3b28cc;
  font-size: 18px;
  font-weight: 400;
  text-decoration: underline;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
