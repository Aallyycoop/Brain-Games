import runTheGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (start, length, step) => {
  const progression = [];
  progression[0] = start;
  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const startRound = () => {
  const start = getRandomNumber(1, 100);
  const length = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 20);
  const progression = getProgression(start, length, step);
  const hiddenElementIndex = getRandomNumber(5, length - 1);
  const hiddenElement = progression.splice(hiddenElementIndex, 1, '..').join(' ');
  const question = progression.join(' ');
  const correctAnswer = hiddenElement;
  return [question, correctAnswer];
};

const runProgression = () => runTheGame(gameRules, startRound);

export default runProgression;
