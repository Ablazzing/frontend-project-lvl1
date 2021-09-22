import hello from './cli.js';
import askQuestions from './ask_questions.js';

const getProgressArray = () => {
  const array = [];
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const progressPlus = Math.floor(Math.random() * 10) + 1;

  for (let index = 0; index < 10; index += 1) {
    array.push(randomNumber + progressPlus * index);
  }
  array[randomNumber - 1] = '..';
  return array.join(' ');
};

const checker = (numbers, answer) => {
  const array = numbers.split(' ');
  const posMissed = array.indexOf('..');
  let prevNumber;
  let nextNumber;
  let correctAnswer;
  if (posMissed !== 0 && posMissed !== array.length - 1) {
    prevNumber = Number.parseInt(array[posMissed - 1], 10);
    nextNumber = Number.parseInt(array[posMissed + 1], 10);
    correctAnswer = (prevNumber + nextNumber) / 2;
  } else if (posMissed === 0) {
    prevNumber = Number.parseInt(array[posMissed + 1], 10);
    nextNumber = Number.parseInt(array[posMissed + 2], 10);
    correctAnswer = prevNumber - (nextNumber - prevNumber);
  } else {
    prevNumber = Number.parseInt(array[posMissed - 2], 10);
    nextNumber = Number.parseInt(array[posMissed - 1], 10);
    correctAnswer = nextNumber + (nextNumber - prevNumber);
  }
  correctAnswer = correctAnswer.toString();
  return [correctAnswer === answer, correctAnswer];
};

const runGame = () => {
  const name = hello();
  console.log('What number is missing in the progression?');
  askQuestions(name, getProgressArray, checker);
};

export default runGame;
