import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('bd-layout')

interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Content: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props
  return (
    <div className={sc('content')} {...rest}>content</div>
  );
};

export default Content;