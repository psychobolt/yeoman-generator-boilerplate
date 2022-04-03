# Development Guide

## Setup
1. Install the latest [Node JS](https://nodejs.org/)@^17.4.0 and [Yarn](https://yarnpkg.com) and simply run ```yarn install``` command in the project directory.
2. Install [Yeoman](http://yeoman.io/)'s command line utility, ```yo```.

## Local Development

To test your generator, link your package with ```yarn link <YOUR_GENERATOR_DIR>``` and run ```yo [generator-name]``` (where 'generator-name' is your defined Yeoman generator name. For instance, by default the boilerplate provided name: ```example-generator```)

For more details, visit Yeoman's [authoring guide](http://yeoman.io/authoring/) for creating a generator.



## Including NPM packages

```sh
yarn add <package-name> --dev # for dev tools, story dependencies, libraries to be bundled
yarn add <package-name> [--peer] # for external dependencies
```

> Note: All packages are installed using the [PnP strategy](https://yarnpkg.com/features/pnp) by default. To see advantages, visit the [official Yarn docs](https://yarnpkg.com/features/pnp#the-node_modules-problem). Some tools however, such as Flow, are not compatible with the PnP resolution strategy. In order to circumvent you can opt out by installing non PnP configurations as a seperate Yarn project. For example, see [Static Types](#static-types).

## Static Types

### Installing Types

```sh
yarn flow-typed-install # clean & install flow definitions from dependencies and peerDependencies
yarn flow-typed-update # downloads and updates new flow definitions
cd shared/flow-deps && yarn install <package-name> # install any node modules that flow cannot resolve with PnP strategy
```

### Creating Stubs

```
yarn flow-typed-create-stub <package-name> # create a flow-typed stub for a package name into shared/flow-typed/npm
```

> Note: Since the shared/flow-typed/npm is ignored, it is best to move the stub file so it can be committed.

### Run Flow

```sh
yarn flow # performs type checking on files
```

## Lint

```sh
yarn lint # runs linter to detect any style issues (css & js)
yarn lint:css # lint only css
yarn lint:js # lint only js
yarn lint:js --fix # attempts to fix js lint issues
```

## Test

```sh
yarn test # runs functional/unit tests
```