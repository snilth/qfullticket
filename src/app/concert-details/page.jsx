// src/app/concert-details/page.jsx
import React from 'react';
import styles from '/css/concert-details.module.css'; // ปรับเส้นทางเป็น '../../css/concert-details.module.css'

const ConcertDetailPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.concertCard}>
        <img 
          src="/poster1.png" // เปลี่ยนเป็น URL รูปภาพจริง
          alt="Jisoo 2025 Asia Tour"
          className={styles.headerImage}
        />
        <h1 className={styles.title}>2025 TREASURE T5 UNIT ASIA TOUR : MOVE "</h1>
        <h2 className={styles.subtitle}>IN BANGKOK</h2>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span>วันที่</span>
            <div>25 พฤษภาคม 2568</div>
          </div>
          <div className={styles.detailItem}>
            <span>สถานที่</span>
            <div>IMPACT ARENA</div>
          </div>
          <div className={styles.detailItem}>
            <span>เวลาเริ่มงาน</span>
            <div>18:00 น.</div>
          </div>
          <div className={styles.detailItem}>
            <span>เวลาเปิดประตู</span>
            <div>16:00 น.</div>
          </div>
        </div>
        <div className={styles.priceSection}>
          <div>6,800 / 6,500 / 5,800</div>
        </div>
        <button className={styles.button}>ซื้อตั๋ว</button>
        <div className={styles.ticketStatus}>ON SALE NOW</div>
      </div>
    </div>
  );
};

export default ConcertDetailPage;