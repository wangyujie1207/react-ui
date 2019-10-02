import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('bd-aside')

interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Content: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props
  return (
    <div className={sc('aside')} {...rest}>aside</div>
  );
};

export default Content;