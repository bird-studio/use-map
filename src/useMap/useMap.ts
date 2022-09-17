const o = <T>(p: T) => ({
  map: <F extends (p: T) => ReturnType<F>>(f: F) => o(f(p)),
  value: p,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...arg: any) => any;
type UseMap = <Hook extends Fn>(p: { useHook: Hook }) => ReturnType<typeof o>;

export const useMap: UseMap = ({ useHook }) => ({
  ...o(useHook()),
});
