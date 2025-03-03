"use client";
import React, { useState } from "react";
import styles from "/css/concert-details.module.css"; // Adjust the path to '../../css/concert-details.module.css'
import { useSession } from "next-auth/react";
import ModalLogin from "../components/ModalLogin";
import { useRouter } from "next/navigation";

const ConcertDetailPage = () => {
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // just for button color LOL
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOn = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const router = useRouter();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleBuyTicket = () => {
    if (!session) {
      handleOpenModal();
    } else {
      router.push("/seat-selection");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.concertCard}>
        <img
          src="/poster1.png"
          alt="Jisoo 2025 Asia Tour"
          className={styles.headerImage}
        />
        <h1 className={styles.title}>
          2025 TREASURE T5 UNIT ASIA TOUR : MOVE "
        </h1>
        <h2 className={styles.subtitle}>IN BANGKOK</h2>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span>Date</span>
            <div>May 25, 2025</div>
          </div>
          <div className={styles.detailItem}>
            <span>Venue</span>
            <div>IMPACT ARENA</div>
          </div>
          <div className={styles.detailItem}>
            <span>Event Time</span>
            <div>6:00 PM</div>
          </div>
          <div className={styles.detailItem}>
            <span>Doors Open</span>
            <div>4:00 PM</div>
          </div>
        </div>
        <div className={styles.priceSection}>
          <div>6,800 / 6,500 / 5,800 THB</div>
        </div>
        <button
          className={styles.button}
          style={{
            backgroundColor: isHovered ? "#d32f2f" : "#f44336",
            transition: "background-color 0.3s ease",
          }}
          onClick={handleBuyTicket}
          onMouseEnter={handleMouseOn}
          onMouseLeave={handleMouseLeave}
        >
          Buy Ticket
        </button>
        <div className={styles.ticketStatus}>ON SALE NOW</div>
      </div>

      {/* if modal is open show ModalLogin component */}
      {isModalOpen && <ModalLogin onClose={handleCloseModal} />}
    </div>
  );
};

export default ConcertDetailPage;
