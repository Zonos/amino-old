import React from "react";
import styled from "styled-components";

import { Text } from "./Text";

const StyledRadio = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: white;
  border: 1px solid ${p => p.theme.Color.gray.base};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  * {
    font-weight: 600;
  }

  &:active {
    box-shadow: 0 0 0 3px ${props => props.theme.Color.primary.veryLight}33;
  }
`;

const CircleIcon = () => (
  <svg width="8" height="8" viewBox="0 0 10 10">
    <circle cx="5" cy="5" r="5" />
  </svg>
);

const SelectedRadio = styled(StyledRadio)`
  background: ${props => props.theme.Color.primary.base} !important;

  svg {
    fill: white;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;

  label {
    margin-left: ${props => props.theme.Density.spacing.sm};
    cursor: pointer;
  }
`;

type Props = {
  checked?: boolean;
  onChange?: any;
  label?: string;
};

export const Radio: React.FC<Props> = props => {
  const { label, checked, onChange } = props;

  return (
    <RadioContainer onClick={() => onChange(!checked)}>
      {!checked && <StyledRadio onClick={() => onChange(!checked)} />}
      {checked && (
        // TODO: animate in
        <SelectedRadio onClick={() => onChange(!checked)}>
          <CircleIcon />
        </SelectedRadio>
      )}
      {label && (
        <label>
          <Text>{label}</Text>
        </label>
      )}
    </RadioContainer>
  );
};

Radio.defaultProps = {
  checked: false
};
