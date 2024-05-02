const Result = ({ res = false, puzzleWord }) => {
  let strResult = '';
  return (
    <>
      <div>
        {res ? (strResult = "You've WON!") : (strResult = "You've Lost.")}
        <h1>{strResult}</h1>
        <p>The word is "{puzzleWord}"</p>
      </div>
    </>
  );
};

export default Result;
