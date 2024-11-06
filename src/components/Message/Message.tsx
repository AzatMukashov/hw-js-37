import { useSelector } from 'react-redux';
import {RootState} from '../../app/store.ts';
import React from 'react';

const Message: React.FC = () => {
const status = useSelector((state: RootState) => state.pin.status)
  return (
    <div>
      {status === 'granted' && <p style={{color: 'green', margin: '0 0 10px'}}>Access Granted</p>}
      {status === 'denied' && <p style={{color: 'red', margin: '0 0 10px'}}>Access Denied</p>}
    </div>
  );
};

export default Message;