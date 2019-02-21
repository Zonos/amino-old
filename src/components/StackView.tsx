import styled from 'styled-components';
import { Density } from '../styles/Density';

type Props = {
  column?: boolean;
  row?: boolean;
  spaced?: boolean;
}

export const StackView = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(props: Props) => props.column ? "column" : "row"};
  flex-direction: ${(props: Props) => props.row ? "row" : "column"};

  & > * {
    margin-bottom: ${(props: Props) => props.spaced ? Density.default.base : "0"};
  }
`;
