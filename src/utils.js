const maxNumRand = 100;
const minNumRand = 0;

const getRandomNumber = (minNum = minNumRand, maxNum = maxNumRand) => {
      const result = Math.floor(Math.random() * maxNum) + minNum;
      return result
};
export default getRandomNumber;
/*const getRandomNumber = (min, max) => {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  };
  
  export default getRandomNumber;*/
