# Yeoman Generator Boilerplate

[![Build Status](https://travis-ci.org/psychobolt/yeoman-generator-boilerplate.svg?branch=master)](https://travis-ci.org/psychobolt/yeoman-generator-boilerplate)
[![Dependencies Status](https://david-dm.org/psychobolt/yeoman-generator-boilerplate.svg)](https://david-dm.org/psychobolt/yeoman-generator-boilerplate)

Boilerplate for creating [Yeoman](http://yeoman.io) Generators targeted for Node 5+.

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
