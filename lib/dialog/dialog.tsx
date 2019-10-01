import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../classes';

interface Props {
  visible: boolean;
  buttons?: Array<React.ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
  enableMask?: boolean
}


const scopedClass = scopedClassMaker('bd-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  const result = props.visible ?
    <Fragment>
      {!props.enableMask && <div className={sc('mask')} onClick={onClickMask}></div>}
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"></Icon>
        </div>
        <header className={sc('header')}>
          提示
        </header>
        <main className={sc('main')}>
          {props.children}
        </main>
        {
          props.buttons && props.buttons.length > 0 &&
          <footer className={sc('footer')}>
            {props.buttons && props.buttons.map((button, index) =>
              React.cloneElement(button, {key: index})
            )}
          </footer>
        }

      </div>
    </Fragment>
    :
    null;
  return (
    ReactDOM.createPortal(result, document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false,
  enableMask: false
};
const modal = (content: React.ReactNode, buttons?: Array<React.ReactElement>, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component =
    <Dialog
      visible={true}
      onClose={() => {
        close();
        afterClose && afterClose();
      }}
      buttons={buttons}
    >
      {content}
    </Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: string) => {
  const button = <button onClick={() => close()}>ok</button>;
  const close = modal(content, [button]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ];
  const close = modal(content, buttons, no);

};


export {alert, confirm, modal};

export default Dialog;