import React, { Fragment } from "react";
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
  CopyInput,
  Form,
  FieldType,
  List,
  ListItem,
  ButtonIntent,
  EmptyState,
} from "amino-ui";
import styled from "styled-components";

export const App = () => {
  return (
    <Fragment>
      <AppBar>
        <ResponsiveContainer>
          the app bar
        </ResponsiveContainer>
      </AppBar>
      <Page>
        <CardStack>
          <Card cardTitle={"hello amino"}>
            <InputGroup>
              <Input placeholder='John' label='First name' />
              <Input placeholder='Doe' label='Last name' />
              <Input placeholder='john.doe@example.com' label='Email' />
              <Input
                placeholder='Disabled'
                disabled
                label='Disabled Input'
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
                label='Select an item'
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
                defaultValue='value 3'
              />
              <CopyInput label='API key' value='asbsb-sdfsdf-234424-sdfasdf' />
            </InputGroup>
          </Card>
          <Card cardTitle="Title" actions={<Button primary raised>Hi</Button>}>
            <List>
              <ListItem
                compact
                labelWidth={300}
                label='List item'
                subtitle="its a great item"
              onClick={() => {console.log("hi")}}
                action={<Button>Action</Button>}
              />
              <ListItem
                compact
                label='List item'
                labelWidth={300}
                active={false}
                subtitle="its a great item"
                onClick={() => {console.log("hi")}}
                action={<Button>Action</Button>}
              />
              <ListItem
                compact
                active={false}
                labelWidth={300}
                label='asdfasdfasdf List item'
                subtitle="its a great item"
                onClick={() => {console.log("hi")}}
                action={<Button>Action</Button>}
              />
              <ListItem
                compact
                labelWidth={300}
                label='List item'
                subtitle="its a great item"
                onClick={() => {console.log("hi")}}
                action={<Button>Action</Button>}
              />
            </List>
          </Card>
          <Card>
            <EmptyState label="No widgets found" subtitle="Create a widget to start doing the thing" action={<Button>Add foo</Button>} />
          </Card>
        </CardStack>
      </Page>
    </Fragment>
  );
};
