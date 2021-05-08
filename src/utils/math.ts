// https://en.wikipedia.org/wiki/Logistic_function
export const getLogisticFunction = (L: number, k: number, x0: number) => (
  x: number,
) => L / (1 + Math.exp(-k * (x - x0)));

export const standardLogisticFunction = getLogisticFunction(1, 1, 0);
