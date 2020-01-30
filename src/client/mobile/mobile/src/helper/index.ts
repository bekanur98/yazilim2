// helper

export * from './localize'

// production
if (!__DEV__) {
  // remove logs
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
  console.debug = () => {};
  console.info = () => {};
  console.trace = () => {};
  (console as any).group = () => {};
  (console as any).groupEnd = () => {};
}

