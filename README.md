# nevatrip-mvp-server [![Build Status](https://travis-ci.org/Nevatrip/frontend.svg?branch=master)](https://travis-ci.org/Nevatrip/frontend) / [![Build Status](https://travis-ci.org/Nevatrip/frontend.svg?branch=develop)](https://travis-ci.org/Nevatrip/frontend)

## Install

```bash
git clone git@github.com/realetive/nevatrip-mvp-server.git
cd nevatrip-mvp-server
```

Repository use [git-crypt](https://github.com/AGWA/git-crypt), so you can uncrypt security files (if your GPG key added to repository):

```bash
git-crypt unlock
```

or just copy `.env`

```bash
cp .env.example .env
```

and install dependencies:

```bash
npm install
```

### Environment variables

Set/change the config in `.env` file.

## Usage

### Production

1. Run the builder:

```bash
NODE_ENV=production npm run make 
```

2. Run server:

```bash
NODE_ENV=production npm start
```

### Develop

Start dev-server

```bash
npm run dev
```

#### Debug

1. For check api response for page, add `json=1` param to URL, for example: http://localhost:3000/?json=1
2. For check bemjson structure, add `bemjson=1` param to URL, for example: http://localhost:3000/?bemjson=1

## Docker

1. Build container

```bash
docker build --no-cache . -t frontend
```

2. Run container

```bash
docker run -ti --rm -p 8000:3012 frontend
```
