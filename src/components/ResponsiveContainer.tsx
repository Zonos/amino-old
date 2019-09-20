import React from "react";
import styled from "styled-components";

export const ResponsiveContainer = styled.div`
  display: block;
  box-sizing: border-box;
  margin: 0 auto;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;
