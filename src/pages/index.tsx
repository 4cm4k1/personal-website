import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Anthony Maki @ Anthony.app</title>
        <meta name='author' content='Anthony Maki' />
        <meta name='description' content='Web Engineer in Minneapolis' />
      </Head>

      <main>
        <h1 className={styles.header}>Anthony Maki</h1>
        <div className={styles.box}>
          <h2 className={styles.subheader}>Web Engineer</h2>
          <h3 className={styles.pronouns}>he/they</h3>
        </div>

        <h3 className={styles.bio}>
          Minneapolis •{' '}
          <a className={styles.link} href='https://anthony.app'>
            https://anthony.app
          </a>{' '}
          •{' '}
          <a className={styles.link} href='mailto:4cm4k1@gmail.com'>
            4cm4k1@gmail.com
          </a>{' '}
          •{' '}
          <a className={styles.link} href='tel:+16122089588'>
            +1 612–208–9588
          </a>
        </h3>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href='/resume'>
              Résumé
            </a>
          </li>
          <li>
            <a className={styles.link} href='https://github.com/4cm4k1'>
              GitHub
            </a>
          </li>
          <li>
            <a className={styles.link} href='https://linkedin.com/in/4cm4k1'>
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              rel='me'
              href='https://mastodon.social/@4cm4k1'
            >
              Mastodon
            </a>
          </li>
          <li>
            <a className={styles.link} href='https://twitter.com/antifa__llc'>
              Twitter
            </a>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
