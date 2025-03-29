const start = 1492819200000;
export const calcMonthAndYear = () => {
  const now = Date.now();
  const m = 1000 * 60 * 60 * 24 * 30;
  const y = 1000 * 60 * 60 * 24 * 30 * 12;
  const month = Math.ceil((now - start) / m);
  const year = Math.floor((now - start) / y);

  return [month, year];
};
