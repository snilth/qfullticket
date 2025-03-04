"use client";
import React, { useState } from "react";
import styles from "/css/concert-details.module.css";
import { useSession } from "next-auth/react";
import ModalLogin from "../components/ModalLogin";
import { useRouter } from "next/navigation";

const QrCodePage = () => {
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const router = useRouter();

  const handleMouseOn = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = () => {
    // ตรวจสอบว่ามี session และรูปภาพหรือไม่
    if (!session) {
      handleOpenModal();
    } else if (!selectedImage) {
      alert("Please upload a QR code image first!");
    } else {
      // ถ้ามีทั้ง session และรูปภาพ ให้ไปหน้า payment
      router.push("/payment");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.concertCard}>
        <img
          src="/qrcode.jpg"
          alt="Jisoo 2025 Asia Tour"
          className={styles.headerImage}
        />
        
        <h2 className={styles.subtitle}>QR CODE</h2>
        
        <div className={styles.details}>
          <div className={styles.imageUploadSection}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className={styles.imageInput}
              id="imageUpload"
            />
            <label htmlFor="imageUpload" className={styles.uploadLabel}>
              Upload QR Code Image
            </label>

            {imagePreview && (
              <div className={styles.imagePreview}>
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ maxWidth: "200px", marginTop: "10px" }}
                />
              </div>
            )}
          </div>
        </div>

        <button
          className={styles.button}
          style={{
            backgroundColor: isHovered ? "#d32f2f" : "#f44336",
            transition: "background-color 0.3s ease",
          }}
          onClick={handleSubmit}
          onMouseEnter={handleMouseOn}
          onMouseLeave={handleMouseLeave}
        >
          SUBMIT
        </button>
      </div>

      {isModalOpen && <ModalLogin onClose={handleCloseModal} />}
    </div>
  );
};

export default QrCodePage ;