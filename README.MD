# React Native TypeScript
Example project containing: TypeScript, react testing library, webdriver io for ui tests, absolute imports configured with eslint and prettier

## Setting up development environment
* Install node
* Install yarn
* Install Android Studio
* Install XCode

## Setting up vscode
* Install the following extensions: Eslint, Prettier, Jest


## Getting Started
Before running any of the scripts listed bellow, it is necessary to have all the packages installed, a.k.
a. yarn

* Scripts:
  * yarn start -> starts the development server.
  * yarn test -> runs the unit tests.
  * yarn test:coverage -> prints out the coverage in the terminal and generates the report.
  * yarn test:coverage:open -> displays the code coverage in a browser.
  * test:e2e:check -> checks the setup of the machine if it can support ui tests.
  * test:e2e:android -> runs the ui tests on a running android emulator (can be configured to run on devices and also on ios, but don't have a mac to validate).
  * yarn lint -> goes through the code and checks for linting issues.
  * yarn lint:types -> goes through the code and checks for typescript violations.
  * yarn lint:fix -> goes through the code and checks for linting issues and fixes them where possible.
  * yarn clean:android -> cleans the android project artifacts, requires gradlew sync afterwards.
  * yarn build:android -> builds the release apk.
  * yarn build:e2e:android -> builds the release apk while setting TEST env variable to true to add testID and accessibilityLabel properties.

# UI tests
Improvement move locators somewhere else and use them as variables, less error prone and better than using plain strings

* Run `yarn test:e2e:check` and fix the issues
* Build android apk `yarn build:e2e:android`
* Start an emulator
* Check device name in `wdio.config.ts` so it matches with emulator device name
* Make sure you don't have a debug version of the app installed
* Run the tests `yarn test:e2e:android`