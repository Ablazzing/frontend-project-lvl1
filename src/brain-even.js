import readlineSync from 'readline-sync';

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRandomNumber = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  let randomNumber = getRandomNumber();
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (answer !== isEven) {
      console.log(
        `'${answer}' is wrong answer. Correct answer was '${isEven}'`,
      );
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct');

    randomNumber = getRandomNumber();
  }
  console.log(`Congratulations, ${name}`);
};
export default runGame;
