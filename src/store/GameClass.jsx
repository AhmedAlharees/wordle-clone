import words from './words.json';

export default class {
  constructor() {
    this.init();
  }
  init() {
    this.word = words[Math.trunc(Math.random() * words.length)];
    this.cureentGuesse = 0;
    this.guesses = new Array(6).fill('');
    this.letters = [];
    this.exactMatch = [];
    this.wordDoesntExist = false;
    this.status = '';
  }
  get won() {
    const isWon = this.guesses[this.cureentGuesse - 1] === this.word;
    if (isWon) this.status = 'won';

    return isWon;
  }

  get lost() {
    const isLost = this.cureentGuesse === 6;
    if (isLost) this.status = 'lost';

    return isLost;
  }

  keyPressed(key) {
    if (this.won || this.lost) return;

    if (key === 'del') {
      return this.deleteLetter();
    }

    if (key === 'enter') {
      return this.submitGuess();
    }

    if (this.guesses[this.cureentGuesse].length < 5 && key.match(/[A-z]/)) {
      return this.addLetter(key);
    }
  }

  addLetter(key) {
    this.guesses[this.cureentGuesse] =
      this.guesses[this.cureentGuesse] + key.toLowerCase();
    return;
  }

  submitGuess() {
    if (words.includes(this.guesses[this.cureentGuesse])) {
      this.cureentGuesse += 1;
      const newLetters = this.guesses[this.cureentGuesse - 1]
        .split('')
        .filter((letter) => !this.letters.includes(letter));

      this.letters = [...this.letters, ...newLetters];
      this.wordDoesntExist = false;
    } else {
      this.wordDoesntExist = true;
    }
  }

  deleteLetter() {
    this.guesses[this.cureentGuesse] = this.guesses[this.cureentGuesse].slice(
      0,
      -1
    );
  }

  ifExactAdd(key) {
    this.exactMatch = [...this.exactMatch, key];
  }
}
