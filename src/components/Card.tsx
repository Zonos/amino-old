import React from "react";
import styled from "styled-components";
import { Surface, Density } from "../styles/Theme";
import { Text, TextStyle } from "./Text";

const StyledCard = styled.section`
  background: white;
  border-radius: ${Surface.defaultRadius};
  padding: ${Density.spacing.md};
  box-shadow: ${Surface.shadow.base};
  display: flex;
  flex: 1;
  flex-direction: column;
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

  h1 {
    flex: 1;
    display: flex;
  }
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
      <Text style={TextStyle.Heading1}>{cardTitle}</Text>
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
