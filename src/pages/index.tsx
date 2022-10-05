import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
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
        <h1 className={styles.header}>welcome 👋</h1>
        <p className={styles.text}>
          Anthony’s a Minneapolis-based remote software engineer (he/they) who
          traffics in high-level languages (e.g., Node, JavaScript, TypeScript),
          serverless/full-stack framework-based web apps (e.g., λ functions,
          Next.js, React, Svelte), &amp; design systems (e.g., a11y, Material
          Design, Bootstrap, tailwind.css).
        </p>
        <p className={styles.text}>
          He maintains many hats as a docs-writer, library-builder,
          UX/DX-improver, CI/CD-automator, scripter, git-hooker, &amp;
          open-source contributor.
        </p>
        <p className={styles.text}>
          All in pursuit of building human-centered software.
        </p>
      </main>
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
          <a
            className={styles.link}
            href='https://github.com/4cm4k1/personal-website'
          >
            source
          </a>
        </li>
      </ul>
      {/* <footer className={styles.footer}>
        <span className={styles.text}>
          powered by{' '}
          <span className={styles.logo}>
            <Image
              src='/icon-32x32.png'
              alt='anthony.app'
              width={16}
              height={16}
            />
          </span>
        </span>
      </footer> */}
    </>
  );
};

export default Home;
