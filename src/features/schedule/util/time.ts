// 정시판별
const checkOnTime = (time: string) => {
  const [, minute] = time.split(':').map(Number);
  if (minute === 0) return true;
  return false;
};

export { checkOnTime };
