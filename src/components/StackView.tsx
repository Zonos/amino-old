import styled from 'styled-components';

interface StackViewProps {
  column?: boolean,
  row?: boolean,
}

export const StackView = styled.div`
  display: flex;
  flex-direction: ${(props: StackViewProps) => props.column ? "column" : "row"};
  flex-direction: ${(props: StackViewProps) => props.row ? "row" : "column"};
`;
