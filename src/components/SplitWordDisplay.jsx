const SplitWordDisplay = ({ word, char, charBgClr, description }) => {
  return (
    <div className="">
      <div className="flex gap-2">
        {word.split('').map((letter) => {
          return (
            <div
              className={`${
                letter === char ? charBgClr : 'bg-neutral-700'
              } h-[32px] w-[30px] font-bold text-2xl p-3 flex justify-center items-center border `}
            >
              {letter.toUpperCase()}
            </div>
          );
        })}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SplitWordDisplay;
