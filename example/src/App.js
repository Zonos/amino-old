import React, { Component } from 'react'
import { Page, Button, Card, Input, InputGroup, Badge } from 'amino'

export default class App extends Component {
  render () {
    return (
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
        </Card>
      </Page>
    )
  }
}
