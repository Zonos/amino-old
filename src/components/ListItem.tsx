import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import { Density, Color } from "../styles/Theme";
import { Text, TextStyle } from "./Text";

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${props => props.theme.Density.spacing.md};
  margin: 0 -${props => props.theme.Density.spacing.md};
  box-sizing: border-box;
  height: 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.045);
  cursor: ${props => (props.onClick ? "pointer" : "inherit")};

  .amino-pop-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .amino-pop-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 150ms, transform 150ms;
  }
  .amino-pop-exit {
    opacity: 1;
    transform: scale(1);
  }
  .amino-pop-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 150ms, transform 150ms;
  }

  &:first-of-type {
    margin-top: -${props => props.theme.Density.spacing.md};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-of-type {
    margin-bottom: -${props => props.theme.Density.spacing.md};
    border-bottom: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:hover {
    background: ${props => (props.onClick ? "#fafafa" : "transparent")};
  }
`;

const CompactItem = styled(StyledItem)`
  padding: ${props => props.theme.Density.spacing.xs} ${props => props.theme.Density.spacing.md};
  height: 42px;
`;

const StyledIcon = styled.img`
  border-radius: 4px;
  width: 34px;
  height: 34px;
  margin-right: ${props => props.theme.Density.spacing.sm};
`;

const StyledLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Info = styled.div<any>`
  display: flex;
  flex-direction: column;

  opacity: ${props => (props.active ? "1" : "0.5")};
  text-decoration: ${props => (props.active ? "none" : "line-through")};
`;

const CompactInfo = styled.div<any>`
  display: flex;
  flex-direction: row;

  *:not(:first-child) {
    margin-left: ${props => props.theme.Density.spacing.sm};
  }

  opacity: ${props => (props.active ? "1" : "0.5")};
  text-decoration: ${props => (props.active ? "none" : "line-through")};
`;

const Width = styled.div<any>`
  width: ${props => props.width}px;
`;

type Props = {
  label: string;
  subtitle?: string;
  icon?: string;
  onClick?: any;
  action?: React.ReactNode;
  compact?: boolean;
  labelWidth?: number;
  active?: boolean;
  revealActions?: boolean;
};

// TODO: refactor styling and compact/non-compact mode

export const ListItem: React.FC<Props> = props => {
  const {
    revealActions,
    label,
    subtitle,
    icon,
    action,
    onClick,
    compact,
    labelWidth,
    active
  } = props;

  const [hover, setHover] = useState(false);

  const ItemInfo = () => (
    <Info active={active}>
      <Text style={TextStyle.Heading3}>{label}</Text>
      {subtitle && <Text style={TextStyle.Subtitle}>{subtitle}</Text>}
    </Info>
  );

  const CompactItemInfo = () => (
    <CompactInfo active={active}>
      {labelWidth && (
        // yo dawg, I heard you like width...
        <Width width={labelWidth}>
          <Text style={TextStyle.Heading3}>{label}</Text>
        </Width>
      )}

      {!labelWidth && <Text style={TextStyle.Heading3}>{label}</Text>}

      {subtitle && <Text style={TextStyle.Subtitle}>{subtitle}</Text>}
    </CompactInfo>
  );

  const ItemBody = () => (
    <StyledLeft>
      {icon && <StyledIcon src={icon} />}
      {!compact && <ItemInfo />}
      {compact && <CompactItemInfo />}
    </StyledLeft>
  );

  return (
    <>
      {!compact && (
        <StyledItem
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={onClick}
        >
          <ItemBody />
          {revealActions && (
            <CSSTransition unmountOnExit in={hover} timeout={150} classNames="amino-pop">
              <div>{action}</div>
            </CSSTransition>
          )}

          {!revealActions && <>{action}</>}
        </StyledItem>
      )}

      {compact && (
        <CompactItem onClick={onClick}>
          <ItemBody />
        </CompactItem>
      )}
    </>
  );
};

ListItem.defaultProps = { active: true };
