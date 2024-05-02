/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-key */
const Guess = ({ word, guess, isGuessed }) => {
  let splited_word = word.split('');

  return (
    <div className="flex gap-2">
      {new Array(5).fill('').map((_, i) => {
        let bgColor = '';
        if (splited_word.includes(guess[i]) && isGuessed) {
          bgColor = exactMatch(word, guess, i)
            ? 'bg-green-600'
            : 'bg-yellow-500';
          splited_word = deleteOccurence(guess[i], splited_word);
        } else {
          bgColor = 'bg-neutral-800';
        }

        return (
          <div
            className={` ${
              bgColor && !isGuessed ? 'bg-neutral-700' : ''
            } h-12 w-12 text-3xl md:text-4xl font-bold text-white flex justify-center items-center  ${
              isGuessed ? `animate-once ${bgColor}` : ''
            }`}
          >
            {guess[i] ? guess[i].toUpperCase() : guess[i]}
          </div>
        );
      })}
    </div>
  );
};

const exactMatch = (word, guess, index) => {
  return word[index] === guess[index];
};

const deleteOccurence = (letter, splited_word) => {
  if (splited_word.includes(letter))
    splited_word.splice(splited_word.indexOf(letter), 1);

  return splited_word;
};

export default Guess;
