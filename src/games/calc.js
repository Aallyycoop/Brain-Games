import readlineSync from 'readline-sync';
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

const roundsCount = 3;

const playCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 0; i < roundsCount; i += 1) {
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    const num1 = getRandomNumber(1, 101);
    let num2 = getRandomNumber(1, 101);
    if (operator === '*') {
      num2 = getRandomNumber(1, 10);
    }
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const correctAnswer = String(calculationResult(num1, num2, operator));
    const getUserAnswer = () => String(readlineSync.question('Your answer: '));
    const userAnswer = getUserAnswer();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playCalc;
