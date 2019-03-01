# amino-ui [![CircleCI](https://circleci.com/gh/iGlobal/amino.svg?style=svg)](https://circleci.com/gh/iGlobal/amino)

Components for building cross-border experiences.

## Quickstart 

First, install `amino-ui` in your project:

```bash
npm i amino-ui
```

Next, import and use whichever components suit your need:

```jsx
import { Button, Card, Input } from 'amino-ui';

const App = () => (
  <Button>Hello from Amino!</Button>
)
```

## Getting started

### Available scripts

- `npm t`: Run test suite
- `npm start`: Run `npm run build` in watch mode
- `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `npm run test:prod`: Run linting and generate coverage
- `npm run build`: Generate bundles and typings, create docs
- `npm run lint`: Lints code
- `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

## License

```
Copyright 2019-present Zonos

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
