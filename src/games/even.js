import runTheGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startRound = () => {
  const question = getRandomNumber(1, 101);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

const runEven = () => runTheGame(gameRules, startRound);

export default runEven;
