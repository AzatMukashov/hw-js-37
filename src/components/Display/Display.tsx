import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import React from 'react';

const Display: React.FC = () => {
const pin = useSelector((state: RootState) => state.pin.value)
  const status = useSelector((state: RootState) => state.pin.status)
  return (
    <div style={{
      display: "inline-block",
      minWidth: '170px',
      height: '40px',
      lineHeight: '45px',
      border: `2px solid ${status === 'granted' ? 'green' : status === 'denied' ? 'red' : 'black'}`,
      backgroundColor: status === 'granted' ? 'lightgreen' : status === 'denied' ? 'lightcoral' : 'white',
      verticalAlign: 'middle',
      marginBottom: '10px',
    }}>
      <div>
        {pin.split('').map((_, index: number) => (
          <span key={index} style={{fontSize: '2rem', margin: '0 10px', color: 'black'}}>*</span>
        ))}
      </div>
    </div>
  );
};

export default Display;