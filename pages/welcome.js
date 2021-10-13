import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import titles from "../data/links.json";
import Link from "next/link";
const Welcome = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
      </Head>

      <div>
        <Link href="/">
          <a>Back to homepage</a>
        </Link>
        <h1>Welcome</h1>

        <div className={styles.pageSection}>
          {titles.map((title) => (
            <Link href="/buy" key={title.id}>
              <a>
                <h3>{title.link}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Welcome;
