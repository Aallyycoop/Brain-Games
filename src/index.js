import readlineSync from 'readline-sync';

const roundsCount = 3;

const runTheGame = (gameRules, startRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = startRound();
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
  }
  console.log(`Congratulations, ${name}!`);
};

export default runTheGame;
