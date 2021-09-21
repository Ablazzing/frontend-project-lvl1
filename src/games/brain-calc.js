import hello from './cli.js';
import askQuestions from './ask_questions.js';

const getRandomNumber = () => {
  const n1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const n2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  return `${n1} + ${n2}`;
};
const checker = (question, answer) => {
  const numbers = question.split(' + ');
  const correctAnswer = Number.parseInt(numbers[0], 10) + Number.parseInt(numbers[1], 10);
  const checkAnswer = correctAnswer === Number.parseInt(answer, 10);
  return [checkAnswer, correctAnswer];
};

const runGame = () => {
  const name = hello();
  console.log('What is result of expression?');
  askQuestions(name, getRandomNumber, checker);
};

export default runGame;
