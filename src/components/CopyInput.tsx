import React from "react";
import styled from "styled-components";
import { Input } from "./Input";

const StyledInput = styled(Input)<Props>`
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter",
    "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco,
    "Courier New", Courier, monospace;
`;

type Props = {
  value: string;
  label?: string;
  className?: string;
};

export const CopyInput: React.FC<Props> = props => {
  const { value, label, className } = props;

  return <StyledInput className={className} label={label} readOnly value={value} />;
};
