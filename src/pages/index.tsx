import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>anthony maki @ anthony.app</title>
        <meta name='description' content='remote web engineer in minneapolis' />
      </Head>

      <main>
        <h1 className={styles.header}>anthony maki</h1>
        <h2 className={styles.subheader}>remote web engineer</h2>
        <p className={styles.bio}>
          he/they • minneapolis •{' '}
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
        </p>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href='/resume'>
              résumé
            </a>
          </li>
          <li>
            <a className={styles.link} href='https://github.com/4cm4k1'>
              github
            </a>
          </li>
          <li>
            <a className={styles.link} href='https://linkedin.com/in/4cm4k1'>
              linkedin
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              rel='me'
              href='https://mastodon.social/@4cm4k1'
            >
              mastodon
            </a>
          </li>
          <li>
            <a className={styles.link} href='https://twitter.com/4cm4k1'>
              twitter
            </a>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
