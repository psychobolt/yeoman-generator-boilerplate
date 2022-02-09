# Yeoman Generator Boilerplate

[![Main workflow](https://github.com/psychobolt/yeoman-generator-boilerplate/actions/workflows/main.yml/badge.svg)](https://github.com/psychobolt/yeoman-generator-boilerplate/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/psychobolt/yeoman-generator-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/psychobolt/yeoman-generator-boilerplate/tree/master/src)

Boilerplate for creating [Yeoman](http://yeoman.io) Generators

## Included

- [Babel](https://babeljs.io/) CLI with presets:
  - [Env](https://babeljs.io/docs/plugins/preset-env/) with [stage-0](https://babeljs.io/docs/plugins/preset-stage-0/) features 
  - [Flow](https://flow.org/) Type support
- ES Linting: [ESLint](http://eslint.org/) using [AirBnb style guide](https://github.com/airbnb/javascript)

## Setup

1. Install the latest [Node JS](https://nodejs.org/) and [Yarn](https://yarnpkg.com) and simply run ```yarn``` or ```yarn install``` command in the project directory.
2. Install [Yeoman](http://yeoman.io/)'s command line utility, ```yo```.

## Local Development

During development, run watch task:
```sh
yarn start # compile new code changes
```

Then, to test your generator, link your package with ```npm link``` and run ```yo [generator-name]``` (where 'generator-name' is your defined Yeoman generator name. For instance, by default the boilerplate provided name: ```example-generator```)

For more details, visit Yeoman's [authoring guide](http://yeoman.io/authoring/) for creating a generator.
