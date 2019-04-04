import React from "react";
import styled from "styled-components";
import { Surface, Density, Color } from "../styles/Theme";

const StyledCard = styled.section`
  background: white;
  border-radius: ${Surface.defaultRadius};
  padding: ${Density.spacing.md};
  box-shadow: ${Surface.shadow.base};
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  margin-top: 0;
  color: ${Color.text.dark};
  margin: -${Density.spacing.md};
  margin-bottom: ${Density.spacing.md};
  padding: ${Density.spacing.md};
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.045);
  font-size: 16px;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: -0.03px;
`;

type Props = {
  cardTitle?: String;
  className?: string;
};

export const Card: React.FC<Props> = props => {
  const { children, cardTitle } = props;

  return (
    <StyledCard {...props}>
      {cardTitle ? <StyledTitle>{cardTitle}</StyledTitle> : null}
      {children}
    </StyledCard>
  );
};
