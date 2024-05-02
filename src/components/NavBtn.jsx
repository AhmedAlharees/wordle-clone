const NavBtn = (prop) => {
  return (
    <div>
      <button onClick={() => prop.clickFunc()} className={`${prop.extraStyle} h-8 w-8 md:h-12 md:w-12 flex justify-center items-center`}>
        <img src={prop.ImgSrc} alt="" className="w-full"/>
      </button>
    </div>
  );
};

export default NavBtn;
