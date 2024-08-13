"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Bt8.module.css";

export default function Bt8() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 20;

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPaginationButtons = () => {
    const pageButtons = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pageButtons.push(
          <a
            key={i}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
            className={`${styles.pageButton} ${
              currentPage === i
                ? styles.pageButtonActive
                : styles.pageButtonInactive
            }`}
          >
            {i}
          </a>
        );
      } else if (
        i === currentPage - delta - 1 ||
        i === currentPage + delta + 1
      ) {
        pageButtons.push(
          <span key={i} className={styles.ellipsis}>
            ...
          </span>
        );
      }
    }

    return pageButtons;
  };

  return (
    <div className={styles.container}>
      <div className={styles.paginationWrapper}>
        <div className={styles.pageInfo}>
          <span className={styles.pageInfoText}>
            Trang {currentPage} / {totalPages}
          </span>
        </div>
        <div className={styles.buttonGroup}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${styles.arrowButton} ${
              currentPage === 1
                ? styles.arrowButtonDisabled
                : styles.arrowButtonEnabled
            }`}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5" />
          </button>
          {renderPaginationButtons()}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${styles.arrowButton} ${
              currentPage === totalPages
                ? styles.arrowButtonDisabled
                : styles.arrowButtonEnabled
            }`}
          >
            <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
