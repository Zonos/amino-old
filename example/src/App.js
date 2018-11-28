import React, { Component } from 'react'
import { Page, Button, Card, Input, InputGroup } from 'amino'

export default class App extends Component {
  render () {
    return (
      <Page>
        <Card cardTitle={"hello amino"}>
          <InputGroup>
            <Input label="First name" />
            <Input label="Last name" />
            <Input label="Email" />
          </InputGroup>
          <br /><br />
          <Button secondary>some button</Button>
        </Card>
      </Page>
    )
  }
}
