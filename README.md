# rspack example

This repo demonstrates how to use rspack and Nx in a standalone React project.

## Setup

```bash
pnpm install
```

## Running development server

```bash
pnpm run dev 

# Or
npx nx dev
```

## Building production bundle

```bash
pnpm run build

# Or
npx nx build
```

> NOTE: Nx caches the build output (i.e. `dist`) if the source files have not changed. When a test file (e.g. `*.spec.tsx`) changes, the build is still cached.


### Running production bundle


```bash
npx serve dist/demo
```

## Running tests

This project uses Jest to run unit tests.

```bash
pnpm run test

# Or
npx nx test
```

> NOTE: Nx caches the test result if the source and test files have no changed. When a non-source, non-test file (e.g. `*.md`) changes, the test is still cached.

