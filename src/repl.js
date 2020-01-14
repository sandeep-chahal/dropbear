const { prompt } = require('inquirer');
const chalk = require('chalk');

const askQuestions = () => {
  const questions = [
    { name: 'COMMAND', type: 'input', message: chalk.blue('>') },
  ];
  return prompt(questions);
};

const { parseAndEvaluate } = require('./parse-and-evaluate');

const repl = async () => {
  try {
    const answers = await askQuestions();
    const { COMMAND } = answers;
    if (COMMAND) {
      console.log(chalk.yellow(parseAndEvaluate(COMMAND)));
    }
  } catch (err) {
    console.log(err);
  }
  repl();
};

if (require.main === module) {
  console.log(
    chalk.red(
      `Welcome to the ${chalk.bgYellow('Dropbear')} Programming Language`,
    ),
  );
  repl();
}

module.exports = repl;
