import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('wrong-modal')
  );
};

const NotAWord = () => {
  return (
    <Modal>
      <div className="fixed top-0 left-0 w-full flex items-center justify-center animate-wrong transition-all">
        <h3 className="text-black font-bold fixed top-[10%] mx-auto bg-white p-1 rounded-lg">
          Not in word list
        </h3>
      </div>
    </Modal>
  );
};

export default NotAWord;
