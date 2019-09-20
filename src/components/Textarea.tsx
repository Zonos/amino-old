import React from "react";
import styled from "styled-components";
import { Surface } from "../styles/Surface";
import { Typography } from "../styles/Typography";
import { Density } from "../styles/Density";
import { Color } from "../styles/Color";

export const Textarea = styled.textarea`
  border-radius: ${props => props.theme.Surface.defaultRadius};
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: ${props => props.theme.Color.text.light};
  display: block;
  padding: ${props => props.theme.Density.spacing.xs} ${props => props.theme.Density.spacing.sm};
  height: 34px;
  width: 100%;
  font-family: ${Typography.defaultFontFamily};
  min-height: 104px;
  margin-bottom: ${props => props.theme.Density.spacing.md};

  &:focus {
    border: 1px solid ${props => props.theme.Color.primary.veryLight};
    box-shadow: 0 0 0 3px ${props => props.theme.Color.primary.veryLight}33;
  }
`;
