import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import Game from './store/GameClass';
import { useEffect, useState } from 'react';

function App() {
  const myGame = new Game();
  const [playAgain, setPlayAgain] = useState(false);

  useEffect(() => {
    myGame.init();
  }, []);

  const handlePlayAgain = () => {
    setPlayAgain(() => !playAgain);
  };

  return (
    <div className="h-screen bg-faded flex justify-between items-center flex-col ">
      <Header onHandlePlayAgain={handlePlayAgain} myGame={myGame} />
      <Main myGame={myGame} appWord={myGame.word} />
      <Footer />
    </div>
  );
}

export default App;
