const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
} = require('./identify');

const tokenize = input => {
  const tokens = [];
  let cursor = 0;

  while (cursor < input.length) {
    const character = input[cursor];

    if (isParenthesis(character)) {
      tokens.push({ type: 'Parenthesis', value: character });
      cursor++;
      continue;
    }

    if (isWhitespace(character)) {
      cursor++;
      continue;
    }

    if (isNumber(character)) {
      let number = character;
      while (isNumber(input[++cursor])) {
        number += input[cursor];
      }
      tokens.push({ type: 'Number', value: Number(number) });
    }
    if (isLetter(character)) {
      let letter = character;
      while (isLetter(input[++cursor])) {
        letter += input[cursor];
      }
      tokens.push({ type: 'Name', value: letter });
    }
  }
  return tokens;
};

module.exports = { tokenize };
