import React, {useState} from "react";
import styled from "styled-components";
import { Text, TextStyle } from "./Text";
import { DropdownIcon } from "../icons/DropdownIcon";

const StyledCard = styled.section`
  background: white;
  border-radius: 8px;
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
  border-bottom: 1px solid ${props => props.theme.Color.border};
  margin: -${props => props.theme.Density.spacing.md};
  margin-bottom: ${props => props.theme.Density.spacing.md};
  padding: 0 ${props => props.theme.Density.spacing.md};

  h1 {
    flex: 1;
    display: flex;
  }
`;

const StyledDropdownIcon = styled(DropdownIcon)`
  fill: ${props => props.theme.Color.text.light};
`;

type Props = {
  className?: string;
  actions?: React.ReactNode;
  cardTitle?: string;
  collapsible?: boolean;
};

export const Card: React.FC<Props> = props => {
  const { children, cardTitle, actions, collapsible } = props;

  const [ collapsed, setCollapsed] = useState(false);
  const headerVisible = Boolean(cardTitle);

  const cardHeader = (
    <Header>
      <Text style={TextStyle.Heading1}>{cardTitle}</Text>
      {actions && actions}
      {collapsible && <StyledDropdownIcon onClick={() => setCollapsed(!collapsed)}/>}
    </Header>
  );

  return (
    <StyledCard {...props}>
      {headerVisible && cardHeader}
      {!collapsed && children}
    </StyledCard>
  );
};
