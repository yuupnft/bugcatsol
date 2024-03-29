import { useEffect, useState } from 'react';
import styles from '../styles/NavBar.module.css';

import {Rubik} from 'next/font/google';
const rubik = Rubik({
  weight: '400',
  subsets: ['latin']
});

export default function NavBar(props) {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container}`}>
        <a href="#" className={styles.logo}>
          <img src="/logo.svg" alt="Bug Cat Logo"/>
        </a>
        <div className={`${styles.nav_links} ${rubik.className}`}>
          <div className={`${styles.nav_item} ${styles.icon}`}>
            <a href="https://twitter.com/bugcatsolana">
              <img src="/twitter.svg" alt="Bug Cat Community - Twitter"/>
            </a>
          </div>
          <div className={`${styles.nav_item} ${styles.icon}`}>
            <a href="https://t.me/BUGCATCOMMUNITY">
              <img src="/telegram.svg" alt="Bug Cat Community - Telegram"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}