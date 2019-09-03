import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import { Text, TextStyle } from "./Text";

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${props => props.theme.Density.spacing.md};
  margin: 0 -${props => props.theme.Density.spacing.md};
  box-sizing: border-box;
  height: 64px;
  line-height: 1.5;
  border-bottom: 1px solid ${props => props.theme.Color.border};
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
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-of-type {
    margin-bottom: -${props => props.theme.Density.spacing.md};
    border-bottom: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:hover {
    background: ${props => (props.onClick ? "#F2F5F7" : "transparent")};
    //background: ${props => (props.onClick ? "#E7F0FA33" : "transparent")};
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
  flex: 1;
  width: 100%;
  opacity: ${props => (props.active ? "1" : "0.5")};
  text-decoration: ${props => (props.active ? "none" : "line-through")};
`;

const CompactInfo = styled.div<any>`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;

  *:not(:first-child) {
    margin-left: ${props => props.theme.Density.spacing.sm};
  }

  opacity: ${props => (props.active ? "1" : "0.5")};
  text-decoration: ${props => (props.active ? "none" : "line-through")};
`;

const Width = styled.div<any>`
  width: ${props => props.width}px;
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

type Props = {
  label: string;
  subtitle?: string;
  subtitleComponent?: React.ReactNode;
  icon?: string;
  iconComponent?: React.ReactNode;
  onClick?: any;
  action?: React.ReactNode;
  compact?: boolean;
  labelWidth?: number;
  active?: boolean;
  revealActions?: boolean;
  alignSubtitleRight?: boolean;
};

// TODO: refactor styling and compact/non-compact mode

export const ListItem: React.FC<Props> = props => {
  const {
    revealActions,
    label,
    subtitle,
    subtitleComponent,
    icon,
    iconComponent,
    action,
    onClick,
    compact,
    labelWidth,
    active,
    alignSubtitleRight
  } = props;

  const [hover, setHover] = useState(false);

  const SubtitleNode = () => (
    <>{subtitleComponent || (subtitle && <Text style={TextStyle.Subtitle}>{subtitle}</Text>)}</>
  );

  const IconNode = () => <>{iconComponent || (icon && <StyledIcon src={icon} />)}</>;

  const ItemInfo = () => (
    <Info active={active}>
      <Text style={TextStyle.Heading3}>{label}</Text>
      {alignSubtitleRight ? (
        <Right>
          <SubtitleNode />
        </Right>
      ) : (
        <SubtitleNode />
      )}
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

      {alignSubtitleRight ? (
        <Right>
          <SubtitleNode />
        </Right>
      ) : (
        <SubtitleNode />
      )}
    </CompactInfo>
  );

  const ItemBody = () => (
    <StyledLeft>
      <IconNode />
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
