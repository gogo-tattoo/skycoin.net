# skycoin.net

[![Build Status](https://travis-ci.org/skycoin/skycoin.net.svg?branch=master)](https://travis-ci.org/skycoin/skycoin.net)

## Setup

1. Install [nvm](https://github.com/creationix/nvm).

2. Install and use the node version specified in `.nvmrc`:

  ```shell
  $ nvm install && nvm use
  ```

3. Install Yarn:

  ```shell
  $ npm install -g yarn
  ```

4. Install dependencies:

  ```shell
  $ yarn
  ```

## Development

Start the development server:

```shell
$ yarn start
```

Run tests:

```shell
$ yarn test

# Generate coverage report
$ yarn test -- --coverage
```

## Deploying to S3

1. Install and configure the AWS CLI:

  ```shell
  $ brew install awscli
  $ aws configure
  ```

2. Create a static build:

  ```shell
  $ yarn build
  ```

3. Sync the build directory with the S3 bucket:

  ```shell
  $ aws s3 sync build/ s3://bucket-name --acl public-read
  ```

See [this blog post](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af) for bucket setup and detailed deployment instructions.
