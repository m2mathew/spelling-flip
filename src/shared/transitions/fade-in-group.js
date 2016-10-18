import React, { PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import FadeInChild from './fade-in-child';

const propTypes = {
  children: PropTypes.node,
};

const FadeInGroup = props => {
  const {
    children,
    ...other,
  } = props;

  const newChildren = React.Children.map(children, child => (
    <FadeInChild key={child.key}>
      {child}
    </FadeInChild>
  ), this);

  return (
    <ReactTransitionGroup {...other} component="div">
      {newChildren}
    </ReactTransitionGroup>
  );
};

FadeInGroup.propTypes = propTypes;

export default FadeInGroup;
