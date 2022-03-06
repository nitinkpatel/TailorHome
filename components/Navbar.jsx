import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.button}>
          <Image src="/img/tailorhomemsg.png" alt="" width="64" height="64" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Book Appointment!</div>
          <div className={styles.text}>204 298 8220</div>
        </div>
      </div>

     

      <div className={styles.item}>
        <ul className={styles.list}>
        <Image
        src="/img/tailorhomelogo(3).png"
        alt=""
        width="16px"
        height="69px"
      />
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Collection</li>
          <li className={styles.listItem}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
