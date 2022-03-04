import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import DressList from "../components/DressList";
import Featured from "../components/Featured";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tailor Home Canada</title>
        <meta name="description" content="Get an Indian Ethnic dress on rent in W innipeg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <DressList/>
    </div>
  );
}
