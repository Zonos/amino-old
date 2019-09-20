import React from "react";
import styled from "styled-components";

import { Card } from "./Card";
import { Button } from "./Button";
import { Text, TextStyle } from "./Text";
import { Intent } from "../schemas/Intent";

const SaveCard = styled(Card)`
  line-height: 1.5;
  background: ${p => p.theme.Color.gray.dark};
  color: white;

  * {
    color: white;
  }
`;

const LinkButton = styled.button`
  margin-right: ${props => props.theme.Density.spacing.md};
  color: white;
  border: 0;
  padding: 0;
  text-decoration: none;
  transition: all 150ms ease-in-out;
  background: none;
  cursor: pointer;
  font-size: ${props => props.theme.Typography.size.base};
  outline: none;
  font-weight: normal;

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
          <Text style={TextStyle.Heading1}>Unsaved Changes</Text>
          <Text style={TextStyle.Subtitle}>Changes will be lost unless you save them.</Text>
        </Info>

        <Buttons>
          <LinkButton onClick={onCancel}>Cancel</LinkButton>
          <Button saving={saving} onClick={onSave} intent={Intent.Primary}>
            Save changes
          </Button>
        </Buttons>
      </Row>
    </SaveCard>
  );
};
