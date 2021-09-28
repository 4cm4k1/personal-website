import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>anthony.app</title>
        <meta
          name='description'
          content='web software engineer in Minneapolis'
        />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.header}>
          stay
          <br />
          tuned
        </h1>
        <a className={styles.link} href='/resume.pdf'>
          <h2>résumé</h2>
        </a>
      </main>

      <footer className={styles.footer}>
        powered by{' '}
        <span className={styles.logo}>
          <Image
            src='/icon-32x32.png'
            alt='anthony.app'
            width={16}
            height={16}
          />
        </span>
      </footer>
    </>
  );
};

export default Home;
