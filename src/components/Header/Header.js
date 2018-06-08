import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.container}>
        <div className={classnames(styles.tab, styles.selected)}>
          <div className={styles.text}>
            My Tasks
          </div>
        </div>
        <div className={styles.tab}>
          <div className={styles.text}>
            In Progress
          </div>
        </div>
        <div className={styles.tab}>
          <div className={styles.text}>
            Completed
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
