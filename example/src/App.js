import React, { Component, Fragment } from "react";
import {
  Spinner,
  StackView,
  Page,
  Button,
  Card,
  Input,
  InputGroup,
  Badge,
  AppBar,
  ResponsiveContainer,
  Select,
  CardStack,
  CopyInput
} from "amino-ui";
import styled from "styled-components";

const SquareImg = styled.img`
  height: 32px;
  width: 32px;
`;

const Left = () => <SquareImg src='//placehold.it/32x32' />;

const Middle = () => <div>Search bar!</div>;

const Right = () => <SquareImg src='//placehold.it/32x32' />;

export default class App extends Component {
  submit = e => {
    e.preventDefault();
  };

  render() {
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
          <CardStack>
            <Card cardTitle={"hello amino"}>
              <InputGroup>
                <Input placeholder='John' label='First name' />
                <Input placeholder='Doe' label='Last name' />
                <Input placeholder='john.doe@example.com' label='Email' />
              </InputGroup>
              <br />
              <br />
              <Button>some button</Button>
              <Button primary>some primary button</Button>
              <br />
              <br />
              <Badge>Recommended</Badge>
              <br />
              <br />
              <Spinner compact />
            </Card>
            <Card>
              <InputGroup>
                <Select
                  label='Select an item'
                  items={[
                    {
                      label: "item 1",
                      value: "value"
                    },
                    {
                      label: "item 2",
                      value: "value"
                    },
                    {
                      label: "item 3",
                      value: "value"
                    },
                    {
                      label: "item 4",
                      value: "value"
                    }
                  ]}
                />
                <CopyInput label='API key' value='asbsb-sdfsdf-234424-sdfasdf' />
              </InputGroup>
            </Card>
            <Card cardTitle='Form validation example'>
              <form onSubmit={this.submit}>
                <Input
                  constraints={{ required: true }}
                  label='Required field'
                  placeholder='enter the field'
                />
                <Button primary>Submit</Button>
              </form>
            </Card>
          </CardStack>
        </Page>
      </Fragment>
    );
  }
}
