import React, { Fragment, useState } from "react";
import {
  Spinner,
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
  CopyInput,
  List,
  ListItem,
  Intent,
  EmptyState,
  Notice,
  SaveHeader,
  Checkbox,
  Radio,
  RadioGroup,
  Grid,
  Form,
  FieldType
} from "amino-ui";

import styled from 'styled-components';

const GridWrap = styled.div`
  margin: -20px;
`;

export const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Fragment>
      <AppBar>
        <ResponsiveContainer>the app bar</ResponsiveContainer>
      </AppBar>
      <Page>
        <CardStack>
          <SaveHeader />

          <Notice action={<Button>Dismiss</Button>} intent={Intent.Warning}>
            what's up, this is a notice
          </Notice>

          <Card>
            <Form
              onChange={() => {}}
              fields={{
                address1: {
                  type: FieldType.Text,
                  placeholder: "Address line 1",
                  constraints: { required: true }
                },
                address2: {
                  type: FieldType.Text,
                  placeholder: "Address line 2"
                },
                city: {
                  type: FieldType.Text,
                  placeholder: "City",
                  constraints: { required: true }
                },
                state: {
                  type: FieldType.Text,
                  placeholder: "State/province",
                  constraints: { required: true }
                },
                postal: {
                  type: FieldType.Text,
                  placeholder: "Postal code",
                  constraints: { required: true }
                },
                country: {
                  type: FieldType.Text,
                  placeholder: "Country",
                  constraints: { required: true }
                }
              }}
            />
          </Card>

          <Card>
            <GridWrap>

            <Grid
              data={[
                { one: "one", two: "two", three: "three", four: "four", five: "five", six: "six" },
                { one: "one", two: "two", three: "three", four: "four", five: "five", six: "six" },
                { one: "one", two: "two", three: "three", four: "four", five: "five", six: "six" },
                { one: "one", two: "two", three: "three", four: "four", five: "five", six: "six" },
                { one: "one", two: "two", three: "three", four: "four", five: "five", six: "six" },
                { one: "one", two: "two", three: "three", four: "four", five: "five", six: "six" },
                { one: "one", two: "two", three: "three", four: "four", five: "five", six: "six" },
              ]}
            />

            </GridWrap>
          </Card>

          <Card>
            <RadioGroup
              initialValue="123"
              onChange={v => console.log(v)}
              items={[{ value: "123", label: "asdf" }, { value: "456", label: "qwerty" }]}
            />
          </Card>

          <Card>
            <Button onClick={() => setChecked(!checked)}>toggle</Button>
            <Checkbox checked={checked} onChange={setChecked} label="Checkbox label" />
          </Card>

          <Card cardTitle={"hello amino"}>
            <InputGroup>
              <Input placeholder="John" label="First name" />
              <Input placeholder="Doe" label="Last name" />
              <Input placeholder="john.doe@example.com" label="Email" />
              <Input
                placeholder="Disabled"
                disabled
                label="Disabled Input"
                value="You can't change me"
              />
            </InputGroup>
            <br />
            <br />
            {/* <Button>some button</Button> */}
            <Button intent="primary">some primary button</Button>
            <br />
            <Button intent="danger">warning, this is scary</Button>
            <br />
            <Button intent="primary" disabled>
              Its not clickable
            </Button>
            <br />
            <Button>its a button</Button>
            <br />
            <Badge>Recommended</Badge>
            <br />
            <br />
            <Spinner />
            <Spinner compact />
            <Button intent="primary" saving />
          </Card>
          <Card>
            <InputGroup>
              <Select
                label="Select an item"
                items={[
                  {
                    label: "item 1",
                    value: "value1"
                  },
                  {
                    label: "item 2",
                    value: "value1"
                  },
                  {
                    label: "item 3",
                    value: "value3"
                  },
                  {
                    label: "item 4",
                    value: "value4"
                  }
                ]}
                defaultValue="value 3"
              />
              <CopyInput label="API key" value="asbsb-sdfsdf-234424-sdfasdf" />
            </InputGroup>
          </Card>
          <Card
            cardTitle="Title"
            actions={
              <Button primary raised>
                Hi
              </Button>
            }
          >
            <List>
              <ListItem
                compact
                labelWidth={300}
                label="List item"
                subtitle="its a great item"
                onClick={() => {
                  console.log("hi");
                }}
                action={<Button>Action</Button>}
              />
              <ListItem
                compact
                label="List item"
                labelWidth={300}
                active={false}
                subtitle="its a great item"
                onClick={() => {
                  console.log("hi");
                }}
                action={<Button>Action</Button>}
              />
              <ListItem
                compact
                active={false}
                labelWidth={300}
                label="asdfasdfasdf List item"
                subtitle="its a great item"
                onClick={() => {
                  console.log("hi");
                }}
                action={<Button>Action</Button>}
              />
              <ListItem
                compact
                labelWidth={300}
                label="List item"
                subtitle="its a great item"
                onClick={() => {
                  console.log("hi");
                }}
                action={<Button>Action</Button>}
              />
            </List>
          </Card>
          <Card
            cardTitle="Title"
            actions={
              <Button primary raised>
                Hi
              </Button>
            }
          >
            <List>
              <ListItem
                label="List item"
                subtitle="its a great item"
                action={<Button>Action</Button>}
                revealActions
              />
              <ListItem
                label="List item"
                subtitle="its a great item"
                action={<Button>Action</Button>}
                revealActions
              />
              <ListItem
                label="List item"
                subtitle="its a great item"
                action={<Button>Action</Button>}
                revealActions
              />
              <ListItem
                label="List item"
                subtitle="its a great item"
                action={<Button intent={Intent.Icon}>i</Button>}
                revealActions
              />
            </List>
          </Card>
          <Card>
            <EmptyState
              label="You don't have any coupons."
              url="https://docs.zonos.com"
              action={<Button>Create your first coupon</Button>}
            />
          </Card>
        </CardStack>
      </Page>
    </Fragment>
  );
};
