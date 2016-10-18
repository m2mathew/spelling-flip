import React, { Component, PropTypes } from 'react';
import transitions from 'material-ui/styles/transitions';

const rootStyles = {
  transition: transitions.create(null, 'opacity'),
};

class FadeInChild extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  componentWillUnmount() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  }

  componentWillAppear(callback) {
    this.initializeAnimation(callback);
  }

  componentWillEnter(callback) {
    this.initializeAnimation(callback);
  }

  componentDidAppear() {
    this.animate();
  }

  componentDidEnter() {
    this.animate();
  }

  componentWillLeave(callback) {
    this.node.style.opacity = '0';
    this.leaveTimer = setTimeout(callback, 450);
  }

  animate() {
    this.node.style.opacity = '1';
  }

  initializeAnimation(callback) {
    this.node.style.opacity = '0';
    this.enterTimer = setTimeout(callback, 0);
  }

  render() {
    const {
      children,
      ...other,
    } = this.props;

    return (
      <div
        {...other}
        style={rootStyles}
        ref={node => (this.node = node)}
      >
        {children}
      </div>
    );
  }
}

export default FadeInChild;
