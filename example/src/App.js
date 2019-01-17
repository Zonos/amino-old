import React, { Component, Fragment } from 'react'
import { Spinner, StackView, Page, Button, Card, Input, InputGroup, Badge, AppBar, ResponsiveContainer } from 'amino'
import styled from 'styled-components';

const SquareImg = styled.img`
  height: 32px;
  width: 32px;
`;

const Left = () => (
  <SquareImg src="//placehold.it/32x32" />
)

const Middle = () => (
  <div>Search bar!</div>
)

const Right = () => (
  <SquareImg src="//placehold.it/32x32" />
)

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <AppBar>
          <ResponsiveContainer>
            <StackView row>
              <Left />
              <Middle />
              <Right />
            </StackView>
          </ResponsiveContainer>
        </AppBar>
        <Page>
          <Card cardTitle={"hello amino"}>
            <InputGroup>
              <Input placeholder="John" label="First name" />
              <Input placeholder="Doe" label="Last name" />
              <Input placeholder="john.doe@example.com" label="Email" />
            </InputGroup>
            <br /><br />
            <Button>some button</Button>
            <Button primary>some primary button</Button>
            <br /><br />
            <Badge>Recommended</Badge>
            <br /><br />
            <Spinner compact />
          </Card>
        </Page>
      </Fragment>
    )
  }
}
