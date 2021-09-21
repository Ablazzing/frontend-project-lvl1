import readlineSync from 'readline-sync';

const askQuestions = (name, generateFunction, checkFunction) => {
  for (let i = 0; i < 3; i += 1) {
    const question = generateFunction();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const result = checkFunction(question, answer);
    const isRightAnswer = result[0];
    const correctAnswer = result[1];
    if (!isRightAnswer) {
      console.log(
        `'${answer}' is wrong answer. Correct answer was '${correctAnswer}'`,
      );
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};
export default askQuestions;
