// External dependencies
import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { lightBlack, lightBlue50, grey200, white } from 'material-ui/styles/colors';

import FadeInGroup from '../transitions/fade-in-group';

const propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  iconButtons: PropTypes.node,
  isLoading: PropTypes.bool,
  nav: PropTypes.node,
  title: PropTypes.string,
};

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    boxSizing: 'border-box',
    padding: '60px 24px 0 24px',
    height: '100%',
    maxWidth: 900,
    margin: '0 auto',
  },
  paper: {
    display: 'flex',
    flexFlow: 'column',
    flex: '1 0 auto',
    zDepth: 2,
  },
  titleBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 'none',
    backgroundColor: lightBlue50,
    borderRadius: '5px 5px 0 0',
    color: lightBlack,
    fontSize: '24px',
    padding: '0 4px 0 24px',
    height: 64,
  },
  titleText: {
    flex: 'none',
  },
  titleIcons: {
    display: 'flex',
    alignItems: 'center',
    flex: 'none',
    height: 48,
  },
  row: {
    display: 'flex',
    flex: '1 0 auto',
  },
  nav: {
    flex: 'none',
    borderRight: `solid 1px ${grey200}`,
    padding: '8px 0',
    width: 320,
  },
  content: {
    flex: '1 1 auto',
    // Needed for ellipsis content
    minWidth: 0,
  },
  footer: {
    height: 64,
    flex: 'none',
  },
};

export const MainContentContainer = props => {
  const {
    backgroundColor,
    children,
    iconButtons,
    isLoading,
    nav,
    title,
  } = props;

  const titleBarStyles = backgroundColor
    ? { ...styles.titleBar, backgroundColor }
    : styles.titleBar;

  let progressElement;
  if (isLoading) {
    progressElement = (
      <div key="progress" style={{ paddingRight: 14 }}>
        <CircularProgress color={white} size={24} />
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <Paper style={styles.paper}>
        <div style={titleBarStyles}>
          <div style={styles.titleText}>{title}</div>
          <div style={styles.titleIcons}>
            {iconButtons}
            <FadeInGroup>
              {progressElement}
            </FadeInGroup>
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.nav}>
            {nav}
          </div>
          <div style={styles.content}>
            {children}
          </div>
        </div>
      </Paper>
      <footer style={styles.footer} />
    </div>
  );
};

MainContentContainer.propTypes = propTypes;
export default MainContentContainer;
