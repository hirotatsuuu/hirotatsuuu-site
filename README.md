hirotatsu-site
==================

## Requirements
- node 8.8.1
- npm 5.4.2
- yarn 1.2.1


## First
- `yarn`のインストール

```
npm i -g yarn
```

- `firebase-tools`のインストール

```
npm i -g firebase-tools
```


## Setup
- `node`のパッケージのインストール

```
yarn
```


## Usage
- `webpack-dev-server`を起動して、`localhost:1192`にアクセスできるようにする

```
yarn dev
```

- `dist`ディレクトリに`bundle.js`を生成する

```
yarn build
```

- `dist`ディレクトリを公開する

```
yarn deploy
```
