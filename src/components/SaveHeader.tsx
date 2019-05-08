import React from "react";
import styled from "styled-components";

import { Card } from "./Card";
import { Button } from "./Button";
import { Text, TextStyle } from "./Text";
import { Color, Density, Surface } from "../styles/Theme";
import { Intent } from "../schemas/Intent";

const SaveCard = styled(Card)`
  box-shadow: ${Surface.shadow.high};
  background: ${Color.dark.base};
`;

const LinkButton = styled.button`
  margin-right: ${Density.spacing.md};
  color: white;
  border: 0;
  padding: 0;
  text-decoration: none;
  transition: all 150ms ease-in-out;
  background: none;
  cursor: pointer;
  font-size: 15px;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  button {
    border: 0;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Info = styled.div`
  flex: 1;
`;

type Props = {
  onSave?: any;
  onCancel?: any;
  saving: boolean;
};

export const SaveHeader: React.FC<Props> = props => {
  const { onSave, onCancel, saving } = props;

  return (
    <SaveCard>
      <Row>
        <Info>
          <Text light style={TextStyle.Heading3}>
            Unsaved Changes
          </Text>
          <Text light style={TextStyle.Subtitle}>
            Changes will be lost unless you save them.
          </Text>
        </Info>

        <Buttons>
          <LinkButton onClick={onCancel}>Cancel</LinkButton>
          <Button saving={saving} onClick={onSave} intent={Intent.Primary}>
            Save
          </Button>
        </Buttons>
      </Row>
    </SaveCard>
  );
};
