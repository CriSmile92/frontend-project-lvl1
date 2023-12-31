const getRandomNumber = (minNum = 0, maxNum = 100) => {
  const result = Math.floor(Math.random() * maxNum) + minNum;
  return result;
};
export default getRandomNumber;
