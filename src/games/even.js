import runTheGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startRound = () => {
  const number = getRandomNumber(1, 101);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => runTheGame(gameRules, startRound);

export default runEven;
