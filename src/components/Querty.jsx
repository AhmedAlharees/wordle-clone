import backspace from '../assets/backspace-icon.svg'
/* eslint-disable react/jsx-key */
const Querty = ({ gameObj, onHandleKeyPress }) => {
  const querty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

  const getBgColor = (letter) => {
    if (gameObj.letters.includes(letter)) {
      const index = gameObj.guesses[gameObj.cureentGuesse - 1].indexOf(letter);
      if (gameObj.exactMatch.includes(letter)) {
        return 'bg-green-600';
      }
      if (gameObj.word[index] === letter) {
        gameObj.ifExactAdd(letter);
        return 'bg-green-600';
      } else if (gameObj.word.includes(letter)) {
        return 'bg-yellow-500';
      } else {
        return 'bg-slate-800';
      }
    }
    return 'bg-btn';
  };
  
  return (
    <div className="flex flex-col gap-2">
      {querty.map((row, i) => (
        <div className="flex justify-center gap-1">
          {i == 2 && (
            <button
              onClick={(e) => onHandleKeyPress(e.currentTarget.value)}
              className="bg-btn 2xl:h-16 w-16 text-sm rounded-md text-white font-bold"
              value={'enter'}
            >
              Enter
            </button>
          )}
          {row.split('').map((key) => (
            <button
              className={`bg-btn h-10 w-7 2xl:h-16 2xl:w-10 rounded-md  text-white font-bold ${getBgColor(
                key
              )}`}
              value={key}
              onClick={(e) => onHandleKeyPress(e.currentTarget.value)}
            >
              {key.toUpperCase()}
            </button>
          ))}
          {i == 2 && (
            <button
              onClick={(e) => onHandleKeyPress(e.currentTarget.value)}
              className="bg-btn 2xl:h-16 w-12 text-sm rounded-md flex justify-center"
              value={'del'}
            >
              <img src={backspace} alt="backspace icon" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Querty;
