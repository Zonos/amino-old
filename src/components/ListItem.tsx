import React from "react";
import styled from "styled-components";
import { Density, Color } from "../styles/Theme";
import { Text, TextStyle } from "./Text";

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${Density.spacing.md};
  margin: 0 -${Density.spacing.md};
  box-sizing: border-box;
  height: 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.045);
  cursor: ${(props: any) => (props.onClick ? "pointer" : "inherit")};

  &:first-of-type {
    margin-top: -${Density.spacing.md};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-of-type {
    margin-bottom: -${Density.spacing.md};
    border-bottom: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:hover {
    background: ${(props: any) => (props.onClick ? "#fafafa" : "transparent")};
  }
`;

const CompactItem = styled(StyledItem)`
  padding: ${Density.spacing.xs} ${Density.spacing.md};
  height: 42px;
`;

const StyledIcon = styled.img`
  border-radius: 4px;
  width: 34px;
  height: 34px;
  margin-right: ${Density.spacing.sm};
`;

const StyledLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Info = styled.div<any>`
  display: flex;
  flex-direction: column;

  opacity: ${(p: any) => (p.active ? "1" : "0.5")};
  text-decoration: ${(p: any) => (p.active ? "none" : "line-through")};
`;

const CompactInfo = styled.div<any>`
  display: flex;
  flex-direction: row;

  *:not(:first-child) {
    margin-left: ${Density.spacing.sm};
  }

  opacity: ${(p: any) => (p.active ? "1" : "0.5")};
  text-decoration: ${(p: any) => (p.active ? "none" : "line-through")};
`;

const Width = styled.div<any>`
  width: ${(p: any) => p.width}px;
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
};

// TODO: refactor styling and compact/non-compact mode

export const ListItem: React.FC<Props> = props => {
  const { label, subtitle, icon, action, onClick, compact, labelWidth, active } = props;

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
        <StyledItem onClick={onClick}>
          <ItemBody />
          {action}
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
