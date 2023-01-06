// import readlineSync from 'readline-sync';
import play from '../index.js';
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
  const num1 = getRandomNumber(1, 101);
  let num2 = getRandomNumber(1, 101);
  if (operator === '*') {
    num2 = getRandomNumber(1, 10);
  }
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculationResult(num1, num2, operator));
  return [question, correctAnswer];
};

const playCalc = () => play(gameRules, startRound);

export default playCalc;
