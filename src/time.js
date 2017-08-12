const time = (() => {
  let elapsedTime = null;
  const countTime = () => {
    const [big, small] = process.hrtime();
    const newTime = big + small * 0.000000001;
    const difference = elapsedTime === null ? 0 : newTime - elapsedTime;
    elapsedTime = newTime;

    return difference;
  };

  return countTime;
})();

export default time;
