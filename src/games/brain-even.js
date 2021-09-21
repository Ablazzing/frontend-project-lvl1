import hello from './cli.js';
import askQuestions from './ask_questions.js';

const getRandomNumber = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;

const checker = (number, answer) => {
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const checkAnswer = correctAnswer === answer;
  return [checkAnswer, correctAnswer];
};

const runGame = () => {
  const name = hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  askQuestions(name, getRandomNumber, checker);
};

export default runGame;
