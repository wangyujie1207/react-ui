import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn = (e: React.MouseEvent) => {
  console.log('fn', e.target);
};

ReactDOM.render(<div>
  <Icon name="alipay" onClick={fn}/>
</div>, document.querySelector('#root'));