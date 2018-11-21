import React, { Component } from 'react'
import { Page, Button, Card, Input } from 'amino'

export default class App extends Component {
  render () {
    return (
      <Page>
        <Card cardTitle={"hello amino"}>
          <Input />
          <br /><br />
          <Button secondary>some button</Button>
        </Card>
      </Page>
    )
  }
}
