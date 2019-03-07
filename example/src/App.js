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
} from "amino-ui";
import styled from "styled-components";

export const App = () => {
  return (
    <Fragment>
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
            {/* <Button>some button</Button> */}
            <Button primary>some primary button</Button>
            <Button primary disabled>Its not clickable</Button>
            <br />
            <br />
            <Badge>Recommended</Badge>
            <br />
            <br />
            <Spinner />
            <Spinner compact />
            <Button primary saving />
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
        <Card>
          <List>
            <ListItem icon="//placehold.it/64x64" label="List item" action={<Button>Action</Button>}></ListItem>
            <ListItem icon="//placehold.it/64x64" label="List item" action={<Button primary>Action</Button>}></ListItem>
            <ListItem icon="//placehold.it/64x64" label="List item" action={<Button primary>Action</Button>}></ListItem>
            <ListItem icon="//placehold.it/64x64" label="List item" action={<Button primary>Action</Button>}></ListItem>
            <ListItem icon="//placehold.it/64x64" label="List item" action={<Button primary>Action</Button>}></ListItem>
          </List>
        </Card>
        </CardStack>
      </Page>
    </Fragment>
  );
};
