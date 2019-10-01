import React from "react";
import styled from "styled-components";

export const Menu = styled.nav`
  a {
    min-width: 200px;
    display: inline-block;
    padding: ${p => p.theme.Density.spacing.sm} ${p => p.theme.Density.spacing.md};
    border-bottom: 1px solid ${p => p.theme.Color.gray.light};
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    background: ${p => p.theme.Color.gray.veryLight};
  }

  a:last-of-type {
    border-bottom: 0;
    border-bottom-left-radius: ${p => p.theme.Surface.radius.base};
    border-bottom-right-radius: ${p => p.theme.Surface.radius.base};
  }

  a:first-of-type {
    border-top-left-radius: ${p => p.theme.Surface.radius.base};
    border-top-right-radius: ${p => p.theme.Surface.radius.base};
  }
`;
