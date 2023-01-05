import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const roundsCount = 3;

const playEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber(1, 101);
    console.log(`Question: ${number}`);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
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

export default playEven;
