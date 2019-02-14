import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

export const SidebarLayout = styled.div`
  display: grid;
  grid-gap: 50px; /* TODO: use density */
  grid-template-columns: 250px 1fr;
  grid-template-areas: 'sidebar content';
`;
