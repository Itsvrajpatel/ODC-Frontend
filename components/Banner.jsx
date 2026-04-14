"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Banner.module.css';

export default function Banner() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const section = bgRef.current.parentElement;
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top * 0.3;
      bgRef.current.style.transform = `translateY(${scrolled}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.bannerSection}>
      {/* Parallax Background */}
      <div className={styles.bgWrapper} ref={bgRef}>
        <img
          src="/assets/banner.jpeg"
          alt="Engineer studying freight systems"
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.tagline}>We're rebuilding how freight operations actually work</p>
      </div>
    </section>
  );
}
