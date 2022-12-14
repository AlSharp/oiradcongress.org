import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Oirad Congress</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" href="./favicon.png" />
      </Head>
      <h1 className={styles.title}>
        <span>Welcome to </span><a href="https://goo.gl/maps/xJSd9i8R2C66YVzv9">Oirad Congress Website!</a>
      </h1>
      <h2 className={styles.subTitle}>
        The website is coming soon
      </h2>
    </>
  )
}