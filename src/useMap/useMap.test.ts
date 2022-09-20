import { useMap } from "./useMap";

describe("useMap", () => {
  test("map", () => {
    const fn = (p: string) => `${p}${p}`;
    const fn2 = (p: string) => `${p}${p}${p}`;
    const v = "ok";
    const useHook = () => v;

    const r = useMap({ useHook }).map(fn).map(fn2).value;
    expect(r).toEqual(fn2(fn(v)));
  });
});
