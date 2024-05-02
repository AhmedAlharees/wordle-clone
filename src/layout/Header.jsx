import { useState } from 'react';
import helpIcon from '../assets/help-icon.svg';
import playIcon from '../assets/replay.svg';
import HowToPlay from '../components/HowToPlay';
import PlayAgain from '../components/PlayAgain';
import NavBtn from '../components/NavBtn';

const Header = ({ onHandlePlayAgain }) => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showPlayAgain, setShowPlayAgain] = useState(false);

  const handleShowHowToPlay = () => {
    setShowHowToPlay(() => !showHowToPlay);
  };

  const handleShowPlayAgain = () => {
    setShowPlayAgain(() => !showPlayAgain);
  };

  return (
    <div className="p-4  w-full grid grid-cols-3 items-center  border-b-[1px] border-slate-500 ">
      {showHowToPlay && <HowToPlay onHandleShow={handleShowHowToPlay} />}
      {showPlayAgain && (
        <PlayAgain
          onHandleShowPlayAgain={handleShowPlayAgain}
          onHandlePlayAgain={onHandlePlayAgain}
        />
      )}
      <NavBtn ImgSrc={playIcon} clickFunc={handleShowPlayAgain}/>
      <div className="col-start-2 col-end-2 text-center">
        <h1 className=" text-white ml-auto font-bold lg:text-5xl text-4xl font-platypi">
          Wordle
        </h1>
      </div>
      <NavBtn ImgSrc={helpIcon} clickFunc={handleShowHowToPlay} extraStyle={'ml-auto'}/>
    </div>
  );
};
export default Header;
