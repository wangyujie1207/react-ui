import React from 'react';
import './importAllIcons';
import './icon.scss';
import classes from '../helpers/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string,
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className, name, ...restProps} = props;
  return (
    <svg className={classes('bd-icon',className)} {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;