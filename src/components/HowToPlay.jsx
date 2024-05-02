import ReactDom from 'react-dom';
import closeIcon from '../assets/close-icon.svg';
import SplitWordDisplay from './SplitWordDisplay';

const HowModal = ({ children }) => {
  return ReactDom.createPortal(
    children,
    document.getElementById('how-to-play')
  );
};

const HowToPlay = ({ onHandleShow }) => {
  return (
    <HowModal>
      <section className="h-full absolute  w-full top-0 flex justify-center items-center ">
        <div
          onClick={() => onHandleShow()}
          className="h-full w-full absolute inset-0 bg-black opacity-50 "
        ></div>
        <div className="bg-faded p-7 rounded-xl m-2 max-w-[520px] text-white z-10 ">
          <div className="flex justify-between">
            <h2 className="font-oswald font-bold text-4xl">How To Play</h2>
            <button onClick={() => onHandleShow()}>
              <img src={closeIcon} alt="close icon" />
            </button>
          </div>
          <p className="font-oswald text-xl mt-2">
            Guess to Wordle in 6 tries.
          </p>
          <ol className="list-disc text-md ml-4 my-4">
            <li>Each guess must be a valid 5-letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess
              was to the word.
            </li>
          </ol>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-md">Examples</h4>
            <SplitWordDisplay
              word={'weary'}
              char={'w'}
              charBgClr={'bg-green-600'}
              description={'W is in the word, and in the correct spot.'}
            />
            <SplitWordDisplay
              word={'pills'}
              char={'i'}
              charBgClr={'bg-yellow-600'}
              description={'I is in the word, but in the wrong spot.'}
            />
            <SplitWordDisplay
              word={'Vague'}
              char={'u'}
              charBgClr={'bg-neutral-900'}
              description={'U is not in the word in any spot.'}
            />
          </div>
        </div>
      </section>
    </HowModal>
  );
};


export default HowToPlay;
