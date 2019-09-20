import React from "react";
import styled from "styled-components";

import { Intent } from "../schemas/Intent";
import { Card } from "./Card";
import { InfoIcon } from "../icons/InfoIcon";
import { Text } from "./Text";
import { WarningIcon } from "../icons/WarningIcon";
import { ErrorIcon } from "../icons/ErrorIcon";

type Props = {
  action?: any;
  intent?: Intent;
};

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
    margin-right: ${props => props.theme.Density.spacing.sm};
    width: 22px;
    height: 22px;
    fill: black;
  }
`;

const PrimaryIntentIcon = styled.div`
  align-items: center;
  display: flex;

  svg {
    fill: ${props => props.theme.Color.primary.base};
  }
`;

const WarningIntentIcon = styled.div`
  align-items: center;
  display: flex;

  svg {
    fill: ${props => props.theme.Color.warning.base};
  }
`;

const DangerIntentIcon = styled.div`
  align-items: center;
  display: flex;

  svg {
    fill: ${props => props.theme.Color.danger.base};
  }
`;

export const Notice: React.FC<Props> = props => {
  const { children, action, intent } = props;

  const buildIntentIcon = () => {
    switch (intent) {
      case Intent.Primary:
        return (
          <PrimaryIntentIcon>
            <InfoIcon />
          </PrimaryIntentIcon>
        );
      case Intent.Warning:
        return (
          <WarningIntentIcon>
            <WarningIcon />
          </WarningIntentIcon>
        );
      case Intent.Danger:
        return (
          <DangerIntentIcon>
            <ErrorIcon />
          </DangerIntentIcon>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <IntentStack>
        <NoticeInfo>
          {buildIntentIcon()}
          <Text>{children}</Text>
        </NoticeInfo>

        {action && action}
      </IntentStack>
    </Card>
  );
};
