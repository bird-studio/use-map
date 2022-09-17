<p align="center">
  <a href="https://github.com/bird-studio/use-map">
    <img src="https://github.com/bird-studio/use-map/blob/main/media/logo.png"/>
  </a>
</p>

<p align="center">
  <a href="https://semantic-release.gitbook.io/semantic-release/">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://gitmoji.dev">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
  </a>
  <a href="https://codecov.io/gh/bird-studio/use-map">
    <img src="https://codecov.io/gh/bird-studio/use-map/branch/main/graph/badge.svg?token=RBVLU6CIPQ"/>
  </a>
</p>

## Overview

Library for React. hooks can use `map`.

## Use case

```ts
import useSWR from "swr";
import type { SWRResponse } from "swr";

type MainRes = {
  value: string;
};

// Easy to test because it does not use A
const businessLogic = (p: SWRResponse<MainRes>) => {
  if (p.data.value === "foo") {
    return {
      ...p,
      data: {
        ...p.data,
        isFoo: true,
      },
    };
  }
  return {
    ...p,
    data: {
      ...p.data,
      isFoo: false,
    },
  };
};

const useMain = () => {
  const res = useMap({ useHook: () => useSWR("/main", fetchMain) })
    .map(businessLogic)
    // Can be continuous.
    .map((v) => v).value;
};
```
