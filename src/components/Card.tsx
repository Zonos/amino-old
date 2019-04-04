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

const Title = styled.h1`
  margin: 0;
  color: ${Color.text.dark};
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: -0.03px;
  flex: 1;
  display: flex;
`;

const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  height: 64px;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.045);
  margin: -${Density.spacing.md};
  margin-bottom: ${Density.spacing.md};
  padding: 0 ${Density.spacing.md};
`;

type Props = {
  className?: string;
  actions?: React.ReactNode;
  cardTitle?: string;
};

export const Card: React.FC<Props> = props => {
  const { children, cardTitle, actions } = props;

  const headerVisible = Boolean(cardTitle) || (Boolean(actions) && Boolean(cardTitle));

  const cardHeader = (
    <Header>
      <Title>{cardTitle}</Title>
      {actions && actions}
    </Header>
  );

  return (
    <StyledCard {...props}>
      {headerVisible && cardHeader}
      {children}
    </StyledCard>
  );
};
