import Head from 'next/head';
import Image from 'next/image';
import styles from './oasse.vercel.app/_next/static/css/70d1e32f0c087c62.css'; // Ensure you have this CSS module for styles

export default function Home() {
  return (
    <>
      <Head>
        <title>Oasse Learning Studio</title>
        <meta name="description" content="Oasse Learning Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
      </Head>

      <main className={styles.main}>
        <div className={styles.banner}>
          <Image src="/banner.jpg" alt="Oasse Logo" width={1200} height={400} />
        </div>

        <div className={styles.content}>
          <div className={styles.video}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/maCLnd7CSZI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{ padding: "10px" }}></iframe>
          </div>
          <div className={styles.form}>
            <div className="elfsight-app-8cdb6430-9c70-48c0-becf-be53301f5346" data-elfsight-app-lazy></div>
          </div>
        </div>
      </main>
    </>
  );
}
