import closeIcon from '../assets/close-icon.svg';

import ReactDom from 'react-dom';
const PlayAgainModal = ({ children }) => {
  return ReactDom.createPortal(children, document.getElementById('play-again'));
};

const PlayAgain = ({ onHandleShowPlayAgain, onHandlePlayAgain }) => {
  return (
    <PlayAgainModal>
      <div className="absolute top-0 w-full h-full flex justify-center items-center">
        <div
          className="h-full w-full absolute inset-0 bg-black opacity-50 "
          onClick={() => onHandleShowPlayAgain()}
        ></div>
        <div className="bg-faded p-7 rounded-xl m-2 w-[300px] text-white z-10 text-center flex flex-col ">
          <button className="ml-auto" onClick={() => onHandleShowPlayAgain()}>
            <img src={closeIcon} alt="" />
          </button>
          <h2 className="font-oswald font-bold text-4xl">Play Again ?</h2>
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => {
                onHandleShowPlayAgain();
                onHandlePlayAgain();
              }}
              className="font-oswald font-bold text-2xl bg-green-500 px-4 py-2 rounded-xl"
            >
              Play
            </button>
            <button
              onClick={() => window.close()}
              className="font-oswald font-bold text-2xl bg-neutral-500 px-4 py-2 rounded-xl"
            >
              Quit
            </button>
          </div>
        </div>
      </div>
    </PlayAgainModal>
  );
};

export default PlayAgain;
