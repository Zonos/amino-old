import styled from 'styled-components';
import { Density } from '../styles/Density';

interface StackViewProps {
  column?: boolean;
  row?: boolean;
  spaced?: boolean;
}

export const StackView = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(props: StackViewProps) => props.column ? "column" : "row"};
  flex-direction: ${(props: StackViewProps) => props.row ? "row" : "column"};

  & > * {
    margin-bottom: ${(props: StackViewProps) => props.spaced ? Density.default.base : "0"};
  }
`;
