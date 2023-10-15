/* eslint-disable @typescript-eslint/no-explicit-any */
export const delay = (promise: any, timeoutInMs?: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeoutInMs || 2000);
  }).then(() => promise);
};
