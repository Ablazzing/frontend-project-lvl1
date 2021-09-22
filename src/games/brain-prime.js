import hello from './cli.js';
import askQuestions from './ask_questions.js';

const getRandomNumber = () => `${Math.floor(Math.random() * 99) + 2}`;

const checker = (number, answer) => {
  const num = Number.parseInt(number, 10);
  let correctAnswer = 'yes';
  for (let index = 2; index < num; index += 1) {
    if (num % index === 0) {
      correctAnswer = 'no';
      break;
    }
  }
  return [correctAnswer === answer, correctAnswer];
};

const runGame = () => {
  const name = hello();
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
  askQuestions(name, getRandomNumber, checker);
};

export default runGame;
