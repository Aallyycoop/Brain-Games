import play from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while ((a !== 0) && (b !== 0)) {
    if (a > b) {
      a %= b;
    } else if (b > a) {
      b %= a;
    }
  }
  return a + b;
};

const startRound = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));
  return [question, correctAnswer];
};

const playGcd = () => play(gameRules, startRound);

export default playGcd;
