import React from "react";
import styled from "styled-components";
import { Text, TextStyle } from "./Text";
import { Density } from "../styles/Density";

type Props = {
  label: string;
  subtitle?: string;
  action?: React.ReactNode;
};

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Action = styled.div`
  margin-top: ${Density.spacing.sm};
`;

const Subtitle = styled.div`
  margin-top: ${Density.spacing.xs};
`;

export const EmptyState: React.FC<Props> = props => {
  const { label, subtitle, action } = props;

  return (
    <EmptyContainer>
      <Text style={TextStyle.Heading3}>{label}</Text>
      {subtitle && (
        <Subtitle>
          <Text style={TextStyle.Subtitle}>{subtitle}</Text>
        </Subtitle>
      )}
      {action && <Action>{action}</Action>}
    </EmptyContainer>
  );
};
