import React from "react";
import styles from "../../styles/01_atoms/PartnersRow.module.css";
import Image from "next/image";

const Row = ({ imageSrc, companyName }) => {
  // add company link
  return (
    <div className={styles.row}>
      <div className={styles.logoWrapper}>
        <a href={imageSrc} target="_blank" rel="noreferrer">
          <Image src={imageSrc} className={styles.img} alt={`${companyName}`} />
        </a>
      </div>
    </div>
  );
};

export default Row;
