import { useDispatch } from 'react-redux';
import { actions } from '../../app/pinSlice.ts';

const Keyboard = () => {
  const dispatch = useDispatch();
  const handleButtonClick = (value: string) => {
    dispatch(actions.addDigit(value));
  };
  const handleDeleteClick = () => {
    dispatch(actions.removeDigit());
  };
  const handleEnterClick = () => {
    dispatch(actions.checkPin());
  };
  return (
    <div style={{display: "grid", gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', maxWidth: '200px', margin: '0 auto'}}>
      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <button onClick={() => handleButtonClick('4')}>4</button>
      <button onClick={() => handleButtonClick('5')}>5</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <button onClick={handleDeleteClick}>{'<'}</button>
      <button onClick={() => handleButtonClick('0')}>0</button>
      <button onClick={handleEnterClick}>E</button>
    </div>
  );
};

export default Keyboard;