import styled from "styled-components";

export const Info = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: ${p => p.theme.Color.gray.base};
  color: ${p => p.theme.Color.text.light};
  font-family: monospace;
  text-align: center;
  line-height: 16px;
  font-weight: 700;
  margin-left: ${p => p.theme.Density.spacing.sm};
  user-select: none;

  &:hover {
    background: ${p => p.theme.Color.gray.dark};
    cursor: pointer;
    color: white;
  }
`;
