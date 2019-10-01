import React from "react";
import styled from "styled-components";

import { Text, TextStyle } from "./Text";
import { Info } from "./Info";
import ReactTooltip from "react-tooltip";

const StyledCard = styled.section`
  background: white;
  border-radius: ${p => p.theme.Surface.radius.base};
  padding: ${props => props.theme.Density.spacing.md};
  box-shadow: ${props => props.theme.Surface.shadow.base};
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
  border-bottom: 1px solid ${p => p.theme.Color.gray.light};
  margin: -${props => props.theme.Density.spacing.md};
  margin-bottom: ${props => props.theme.Density.spacing.md};
  padding: 0 ${props => props.theme.Density.spacing.md};

  .title {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;

type Props = {
  className?: string;
  actions?: React.ReactNode;
  cardTitle?: string;
  helpText?: string;
};

export const Card: React.FC<Props> = props => {
  const { children, cardTitle, actions, helpText } = props;

  const headerVisible = Boolean(cardTitle) || (Boolean(actions) && Boolean(cardTitle));

  const cardHeader = (
    <Header>
      <div className="title">
        <Text style={TextStyle.Heading1}>{cardTitle}</Text>
        {helpText && (
          <>
            <Info data-tip={helpText}>i</Info>
            <ReactTooltip className="amino-tooltip" effect="solid" place="right" />
          </>
        )}
      </div>
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
