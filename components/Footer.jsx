import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/tailorhomelogo(1).png"
          objectFit="cover"
          layout="fill"
          alt=""
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Indian Ethnic Dress Collection
          </h2>
        </div>
    </div>
    </div>
  );
};

export default Footer;
