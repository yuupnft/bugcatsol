import styles from '../styles/Home.module.css';
import NavBar from "@/components/NavBar";

import {Rubik} from 'next/font/google';
const rubik = Rubik({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.section_container}>
        <section className={styles.landing}>
          <img src="/bugcat-landing.svg" alt="Bug Cat"/>
        </section>
      </div>
      <div className={styles.section_container}>
        <section className={`${styles.infos} ${rubik.className}`}>
          <h1>About</h1>
          <p>Bugcat is a cartoon character that resembles a chubby blue cat with six legs.
            He is his namesake and is the main subject of a web comic on Facebook and Instagram, animated clips on YouTube, and stickers on LINE and other websites. other social media.
            He is a cute house pet who craves meat and despises vegetables, living with his owner Lala and the seemingly immortal Dogdog—a large dog possessing uncanny skills in all fields—in Lalas house.
          </p>
          <div className={styles.infos_shape}>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 168.5 152.6" fill="rgba(231, 249, 253, 1)"><path d="M25.1,17.1s69.1-39.5,95.6,1.4S180,30,164.5,90c-12.4,47.8-26.1,20.6-62,57.9-17.8,18.5-77.2-22-89.8-48.3C-8.8,54.6-2,32.2,25.1,17.1Z"></path></svg>
          </div>
        </section>
      </div>
      <div className={styles.section_container}>
        <section className={`${styles.infos} ${rubik.className}`}>
          <h1>Tokenomics</h1>
          <div className={styles.pill_container}>
            <div className={styles.pill}>
              <div className={styles.header}>
                Ticker
              </div>
              <div className={styles.detail}>
                $BUGCAT
              </div>
            </div>
            <div className={styles.pill}>
              <div className={styles.header}>
                Supply
              </div>
              <div className={styles.detail}>
                10.000.000
              </div>
            </div>
            <div className={styles.pill}>
              <div className={styles.header}>
                Tax
              </div>
              <div className={styles.detail}>
                0/0
              </div>
            </div>
            <div className={styles.pill}>
              <div className={styles.header}>
                Liquidity
              </div>
              <div className={styles.detail}>
                BURNED
              </div>
            </div>
          </div>
          <div className={styles.bugcat_details}>
            <img src="/bugcat-details.svg" alt="Bug Cat"/>
          </div>
        </section>
      </div>
      <div className={styles.section_container}>
        <section className={`${styles.infos} ${rubik.className}`}>
          <h1>Contract Address</h1>
          <p className={styles.ca}>
            68hq3Lgqg4a7qHoGpgf7Pz18swuMpPc5gXYmPt3UEZ7L
          </p>
          <div className={styles.infos_shape_2}>
            <svg className={styles.svg_2} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 168.5 152.6" fill="rgba(231, 249, 253, 1)"><path d="M25.1,17.1s69.1-39.5,95.6,1.4S180,30,164.5,90c-12.4,47.8-26.1,20.6-62,57.9-17.8,18.5-77.2-22-89.8-48.3C-8.8,54.6-2,32.2,25.1,17.1Z"></path></svg>
          </div>
        </section>
      </div>
    </div>
  );
}
