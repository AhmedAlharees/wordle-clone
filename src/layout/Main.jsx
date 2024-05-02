/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Guess from '../components/Guess';
import Querty from '../components/Querty';
import NotAWord from '../components/NotAWord';

const Main = ({ myGame }) => {
  const [guess, setGuess] = useState(myGame.guesses[myGame.cureentGuesse]);
  const [showWrongModal, setShowWrongModal] = useState(myGame.wordDoesntExist);

  const handleKeyPress = (key) => {
    myGame.keyPressed(key);
    setGuess(() => myGame.guesses[myGame.cureentGuesse]);

    key !== 'enter'
      ? setShowWrongModal(() => false)
      : setShowWrongModal(() => myGame.wordDoesntExist);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {myGame.guesses.map((_, i) => (
          <Guess
            key={i}
            word={myGame.word}
            guess={myGame.guesses[i]}
            isGuessed={i < myGame.cureentGuesse}
          />
        ))}
      </div>
      <Querty gameObj={myGame} onHandleKeyPress={handleKeyPress} />
      {showWrongModal && <NotAWord />}
    </>
  );
};

export default Main;
