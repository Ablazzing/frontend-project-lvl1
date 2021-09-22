import hello from './cli.js';
import askQuestions from './ask_questions.js';

const getNodNumbers = () => {
  while (true) {
    const n1 = Math.floor(Math.random() * (150 - 1 + 1)) + 1;
    const n2 = Math.floor(Math.random() * (150 - 1 + 1)) + 1;
    if (n1 !== n2 && n1 !== 1 && n2 !== 1) {
      const min = n1 < n2 ? n1 : n2;
      for (let index = min; index > 1; index -= 1) {
        if (n1 % index === 0 && n2 % index === 0) {
          return `${n1} ${n2}`;
        }
      }
    }
  }
};

const checker = (question, answer) => {
  const numbers = question.split(' ');
  const n1 = Number.parseInt(numbers[0], 10);
  const n2 = Number.parseInt(numbers[1], 10);
  let correctAnswer;
  const min = n1 < n2 ? n1 : n2;
  for (let index = min; index > 1; index -= 1) {
    if (n1 % index === 0 && n2 % index === 0) {
      correctAnswer = index;
      break;
    }
  }

  const checkAnswer = correctAnswer === Number.parseInt(answer, 10);
  return [checkAnswer, correctAnswer];
};

const runGame = () => {
  const name = hello();
  console.log('What is result of expression?');
  askQuestions(name, getNodNumbers, checker);
};

export default runGame;
