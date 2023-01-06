import readlineSync from 'readline-sync';
// import getRandomNumber from '../getRandomNumber.js';

// const operators = ['+', '-', '*'];

// const gameRules = 'What is the result of the expression?';

const roundsCount = 3;

const play = (gameRules, startRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 0; i < roundsCount; i += 1) {
    const questionAndCorrectAnswer = startRound();
    const question = questionAndCorrectAnswer[0];
    const correctAnswer = questionAndCorrectAnswer[1];
    console.log(`Question: ${question}`);
    const getUserAnswer = () => String(readlineSync.question('Your answer: '));
    const userAnswer = getUserAnswer();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};

export default play;
