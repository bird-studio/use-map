// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...arg: any) => any;

const m = <T>(p: T) =>
  ({
    value: p,
    map: <F extends Fn>(f: F) => m(f(p)),
  }) as const;

type M<T> = {
  value: T;
  map: <R>(f: (p: T) => R) => M<R>;
};

type UseMap = <Hook extends Fn>(p: { useHook: Hook }) => M<ReturnType<Hook>>;
export const useMap: UseMap = ({ useHook }) => ({
  ...m(useHook()),
});
