import React from "react";
import styled from "styled-components";

import { Intent } from "../schemas/Intent";
import { Card } from "./Card";
import { Density, Color } from "../styles/Theme";
import { InfoIcon } from "../icons/InfoIcon";

type Props = {
  action?: any;
  intent?: Intent;
};

const PrimaryIntent = styled.div`
  width: 4px;
  margin-left: -${Density.spacing.md};
  margin-top: -${Density.spacing.md};
  margin-bottom: -${Density.spacing.md};
  background: ${Color.primary.base};
  content: " ";
  margin-right: ${Density.spacing.md};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const IntentStack = styled.div`
  display: flex;
  flex-direction: row;
`;

const NoticeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;

  svg {
    fill: ${Color.primary.base};
    margin-right: ${Density.spacing.sm};
  }
`;

export const Notice: React.FC<Props> = props => {
  const { children, action, intent } = props;

  const buildIntentRibbon = () => {
    switch (intent) {
      case Intent.Primary:
        return <PrimaryIntent />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <IntentStack>
        {buildIntentRibbon()}

        <NoticeInfo>
          <InfoIcon />
          {children}
        </NoticeInfo>

        {action && action}
      </IntentStack>
    </Card>
  );
};
