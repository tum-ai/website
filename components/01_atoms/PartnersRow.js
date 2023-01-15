import React from 'react';
import styles from '../../styles/01_atoms/PartnersRow.module.css';

const Row = ({imageSrc, companyName, companyLink}) => {
    return (
        <div className={styles.row}>
            <div className={styles.logoWrapper}>
                <a href={imageSrc} target="_blank">
                    <img src={imageSrc} className={styles.img} alt={`${companyName}`} />
                </a>
            </div>
        </div>
    );
};

export default Row;
