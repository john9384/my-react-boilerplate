import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Colors } from 'design-system/constants/Colors';
import { Text } from 'design-system/components/Typography/Text';
import { Icon } from '../Icon';
import { Box } from '../Box';
import { Dimensions } from 'design-system/constants/Dimensions';
import { Spacing } from 'design-system/constants/Spacing';

interface Props {
  text?: string;
  onClickAction?: () => void;
}

const BackText = ({ text, onClickAction }: Props) => {
  const navigate = useNavigate();

  return (
    <Back
      onClick={() => {
        onClickAction ? onClickAction() : navigate(-1);
      }}
      flexDirection="row"
      alignItems="center"
      gap={Spacing.S16}
    >
      <Icon name="arrow-left" color={Colors.PRIMARY} size={Dimensions.D16} />
      {text && (
        <Text colorType="primary" size="F12">
          {text}
        </Text>
      )}
    </Back>
  );
};

const Back = styled(Box)`
  background: transparent;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${Colors.HOVER};

    svg path {
      stroke: ${Colors.HOVER};
    }
  }
`;

export default BackText;
