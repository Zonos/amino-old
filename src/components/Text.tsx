import React from "react";
import styled from "styled-components";

import { Color } from "../styles/Color";

export enum TextStyle {
  Paragraph,
  Heading1,
  Heading2,
  Heading3,
  Subtitle
}

const Paragraph = styled.p`
  color: ${Color.text.base};
  font-size: 15px;
`;

// TODO: Is this H2 maybe?
const Heading1 = styled.h1`
  color: ${Color.text.dark};
  margin: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.03px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Heading2 = styled.h2``;

const Heading3 = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: ${Color.text.base};
  margin: 0;
`;

const Subtitle = styled.p`
  color: ${Color.text.veryLight};
  font-size: 15px;
  margin: 0;
`;

const Unstyled = styled.div`
  font-size: 15px;
  font-weight: normal;
  color: ${Color.text.base};
`;

const LightHeading3 = styled(Heading3)`
  color: white;
`;

const LightSubtitle = styled(Subtitle)`
  color: white;
  opacity: 0.7;
`;

type Props = {
  style?: TextStyle;
  light?: boolean;
};

export const Text: React.FC<Props> = props => {
  const { children, style, light } = props;

  const buildTag = () => {
    if (style === undefined) {
      return <Unstyled>{children}</Unstyled>;
    }

    if (light) {
      /* TODO: all styles */
      switch (style) {
        case TextStyle.Heading3:
          return <LightHeading3>{children}</LightHeading3>;
        case TextStyle.Subtitle:
          return <LightSubtitle>{children}</LightSubtitle>;
        default:
          return <Unstyled>{children}</Unstyled>;
      }
    }

    switch (style) {
      case TextStyle.Heading1:
        return <Heading1>{children}</Heading1>;
      case TextStyle.Heading2:
        return <Heading2>{children}</Heading2>;
      case TextStyle.Heading3:
        return <Heading3>{children}</Heading3>;
      case TextStyle.Paragraph:
        return <Paragraph>{children}</Paragraph>;
      case TextStyle.Subtitle:
        return <Subtitle>{children}</Subtitle>;
      default:
        return <Unstyled>{children}</Unstyled>;
    }
  };

  return <>{buildTag()}</>;
};
