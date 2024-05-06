import styled from 'styled-components';
import { Colors } from 'design-system/constants/Colors';
import { Spacing } from 'design-system/constants/Spacing';
import { Dimensions } from 'design-system/constants/Dimensions';
import { Radius } from 'design-system/constants/Radius';

type FlexDirection = 'row' | 'column';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type FlexGrow = number | 'initial' | 'inherit' | 'unset' | 'auto';
type BorderWidthType = 'D1' | 'D2';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

interface BorderRadius {
  all?: Radius;
  topRight?: Radius;
  bottomRight?: Radius;
  bottomLeft?: Radius;
  topLeft?: Radius;
}

interface Border {
  style?: 'solid' | 'dashed';
  color?: Colors;
  all?: BorderWidthType;
  top?: BorderWidthType;
  right?: BorderWidthType;
  bottom?: BorderWidthType;
  left?: BorderWidthType;
}

interface BoxProps {
  children?: React.ReactNode;
  flexWrap?: FlexWrap;
  flexGrow?: FlexGrow;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  gap?: Spacing;
  flex?: number;
  isResponsiveRow?: boolean;
  background?: Colors;
  boxShadow?: Spacing;
  margin?: Spacing;
  marginTop?: Spacing;
  marginRight?: Spacing;
  marginBottom?: Spacing;
  marginLeft?: Spacing;
  padding?: Spacing;
  paddingTop?: Spacing;
  paddingRight?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingX?: Spacing;
  paddingY?: Spacing;
  marginX?: Spacing;
  marginY?: Spacing;
  borderRadius?: Radius | BorderRadius;
  border?: Border;
  width?: Dimensions;
  maxWidth?: Dimensions;
  minWidth?: Dimensions;
  height?: Dimensions;
  maxHeight?: Dimensions;
  minHeight?: Dimensions;
  cursor?: string;
  onClick?: () => void;
}

export const Box: React.FC<BoxProps> = styled.div<BoxProps>`
  ${({ width }) => width && `width: ${width};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}

  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow};`}
  ${({ flex }) => flex && `flex: ${flex};`}

  ${({ isResponsiveRow }) => isResponsiveRow && 'flex-wrap: wrap'};
  ${({ background }) => background && `background-color: ${background};`}
  ${({ cursor }) => cursor && `cursor: ${cursor};`}

  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`}
  ${({ marginX }) =>
    marginX && `margin-left: ${marginX}; margin-right: ${marginX};`}
  ${({ marginY }) =>
    marginY && `margin-top: ${marginY}; margin-bottom: ${marginY};`}

  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop};`}
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};`}
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom};`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft};`}
  ${({ paddingX }) =>
    paddingX && `padding-left: ${paddingX}; padding-right: ${paddingX};`}
  ${({ paddingY }) =>
    paddingY && `padding-top: ${paddingY}; padding-bottom: ${paddingY};`}

  ${({ borderRadius }) => {
    if (!borderRadius) return;
    if (typeof borderRadius === 'string')
      return `border-radius: ${borderRadius};`;

    if (borderRadius.all) return `border-radius: ${borderRadius.all};`;

    if (borderRadius.topRight)
      return `border-top-right-radius: ${borderRadius.topRight};`;
    if (borderRadius.bottomRight)
      return `border-bottom-right-radius: ${borderRadius.bottomRight};`;
    if (borderRadius.bottomLeft)
      return `border-bottom-left-radius: ${borderRadius.bottomLeft};`;
    if (borderRadius.topLeft)
      return `border-top-left-radius: ${borderRadius.topLeft};`;
  }}

  ${({ border, theme }) => {
    if (!border) return;

    const borderStyle = border.style || 'solid';
    const borderColor = border.color ? border.color : theme.color.border;

    if (typeof border === 'string')
      return `border: ${border} ${borderStyle} ${borderColor};`;

    if (border.all)
      return `border: ${border.all} ${borderStyle} ${borderColor};`;

    if (border.top)
      return `border-top: ${border.top} ${borderStyle} ${borderColor};`;

    if (border.right)
      return `border-right: ${border.right} ${borderStyle} ${borderColor};`;
    if (border.bottom)
      return `border-bottom: ${border.bottom} ${borderStyle} ${borderColor};`;
    if (border.left)
      return `border-left: ${border.left} ${borderStyle} ${borderColor};`;
  }}
`;

export const ColoredBox = styled(Box)`
  background: ${({ background, theme }) =>
    background ? background : theme.color.background};
`;
