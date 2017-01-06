// @flow
import React, { Component } from 'react';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Hey it works.</h1>
          <p>Change me in app/components/Home.js</p>
        </div>
      </div>
    );
  }
}
