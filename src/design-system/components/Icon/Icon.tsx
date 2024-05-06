import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { Colors } from '../../constants';
import React, { lazy, Suspense } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { LucideProps } from 'lucide-react';
import { logger } from 'utils/logger';

// Find icon names here https://lucide.dev/icons/

export type IconName = keyof typeof dynamicIconImports;
export enum IconDimension {
  D8 = 8,
  D12 = 12,
  D16 = 16,
  D20 = 20,
  D24 = 24,
  D32 = 32,
  D48 = 48,
}
export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof dynamicIconImports;
  color?: Colors;
  size?: IconDimension;
  onClick?: () => void;

  [x: string]: any;
}

const Icon = ({ name, color, size, ...props }: IconProps) => {
  const theme = React.useContext(ThemeContext);
  const iconColor = color ? Colors[color] : theme.color.icon;

  if (!dynamicIconImports.hasOwnProperty(name)) {
    logger.warn(`Icon with name ${name} does not exist`);
    return <FallbackComponent size={size} />;
  }
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={<FallbackComponent size={size} />}>
      <LucideIcon
        {...props}
        color={iconColor}
        size={size ? size : IconDimension.D24}
        onClick={() => props.onClick && props.onClick()}
      />
    </Suspense>
  );
};

const FallbackComponent = styled.div<Pick<IconProps, 'size'>>`
  background-color: transparent;
  ${({ size }) =>
    size ? `height: ${size}; width: ${size};` : 'height: 24px; width: 24px;'}
`;

export default Icon;
