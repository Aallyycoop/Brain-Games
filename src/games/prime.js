import play from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  const middle = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= middle; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const startRound = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playPrime = () => play(gameRules, startRound);

export default playPrime;
