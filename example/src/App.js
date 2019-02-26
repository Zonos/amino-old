import React, { useState } from "react";
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
  FieldType
} from "amino-ui";
import styled from "styled-components";

export const App = () => {
  const [valid, setValid] = useState(false);

  const handleFormChange = e => {
    // console.log(e);
  };

  const handleFormValidate = e => {
    setValid(e);
  };

  const handleSubmit = e => {
    if (valid) {
      alert("its all ok");
    } else {
      alert("not valid!!");
    }
  };

  return (
    <>
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
            <Form
              onChange={handleFormChange}
              onValidate={handleFormValidate}
              fields={{
                myField: {
                  type: FieldType.Text,
                  label: "Field name",
                  placeholder: "Enter the value here",
                  constraints: {
                    required: true
                  }
                }
              }}
              // data={{
              //   myField: "initial value",
              // }}
            />
            <Button primary onClick={handleSubmit}>
              Submit
            </Button>
          </Card>
        </CardStack>
      </Page>
    </>
  );
};
