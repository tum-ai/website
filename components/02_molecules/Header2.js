import Image from "next/image";
import styles from "../../styles/02_molecules/Header2.module.css";

export default function Header2({ imageSrc, title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image_container}>
        <Image 
          className={styles.image} 
          src={imageSrc} 
          alt="icon" 
		  width={350}
		  height={350}
        />
      </div>
      <div className={styles.text_container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}
