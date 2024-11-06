import Display from '../../components/Display/Display.tsx';
import Message from '../../components/Message/Message.tsx';
import Keyboard from '../../components/Keyboard/Keyboard.tsx';

const PinInput = () => {
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <Display/>
      <Message/>
      <Keyboard/>
    </div>
  );
};

export default PinInput;