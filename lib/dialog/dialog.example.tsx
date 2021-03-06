import React, {useState} from 'react';
import Dialog, {alert,confirm,modal} from './dialog';

export default function () {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const openModal = ()=>{
    const close = modal(<h1>你好
      <button onClick={()=>close()}>close</button>
    </h1>);
  }
  return (
    <div>
      <div style={{position: 'relative',zIndex: 10, border: '1px solid red'}}>
        <h1>example 1</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog visible={x} buttons={
          [
            <button onClick={() => setX(false)}>1</button>,
            <button onClick={() => setX(false)}>2</button>
          ]
        } onClose={() => setX(false)}>
          <div>hi</div>
        </Dialog>
      </div>
      <div>
        <h1>example 2</h1>
        <button onClick={() => setY(!x)}>click</button>
        <Dialog visible={y} buttons={
          [
            <button onClick={() => setY(false)}>1</button>,
            <button onClick={() => setY(false)}>2</button>
          ]
        } onClose={() => setY(false)} closeOnClickMask>
          <div>hi</div>
        </Dialog>
      </div>
      <div>
        <h1>example 3</h1>
        <button onClick={() => alert('1')}>alert</button>
        <button onClick={() => confirm('1', () => {console.log('yes')}, () => {console.log('no')})}>confirm</button>
        <button onClick={openModal}>modal</button>
      </div>
    </div>

  );
}