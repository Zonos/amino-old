import React, { Component } from 'react'
import { Page, Button, Card } from 'amino'

export default class App extends Component {
  render () {
    return (
      <Page>
        <Card cardTitle={"hello amino"}>
          {/* <Button>some button</Button> */}
          <Button secondary>some button</Button>
        </Card>
      </Page>
    )
  }
}
