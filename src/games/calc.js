import runTheGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const calculationResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const operators = ['+', '-', '*'];

const gameRules = 'What is the result of the expression?';

const startRound = () => {
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const num1 = getRandomNumber(0, 20);
  const num2 = getRandomNumber(0, 20);
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculationResult(num1, num2, operator));
  return [question, correctAnswer];
};

const runCalc = () => runTheGame(gameRules, startRound);

export default runCalc;
