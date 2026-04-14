"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const bgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!bgRef.current) return;
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;

    // Calculate movement (using 40px as max movement offset)
    const xPos = (clientX / innerWidth - 0.5) * 40;
    const yPos = (clientY / innerHeight - 0.5) * 30;

    gsap.to(bgRef.current, {
      x: xPos,
      y: yPos,
      duration: 1.5,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.heroSection} onMouseMove={handleMouseMove}>
      {/* Background Image Setup */}
      <div className={styles.bgWrapper} ref={bgRef}>
        <Image
          src="/assets/trucks.png"
          alt="Freight Trucks on Highway"
          fill
          priority
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Navigation Bar */}
      <nav className={`${styles.nav} ${scrolled ? styles.scrolledNav : ''}`}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <div className={`${styles.circle} ${styles.blue1}`}></div>
            <div className={`${styles.circle} ${styles.blue2}`}></div>
            <div className={`${styles.circle} ${styles.orange}`}></div>
          </div>
          <div className={styles.logoText}>
            <h1>ODC</h1>
            <span>Owner Driver Collective</span>
          </div>
        </div>

        <button className={styles.menuBtn}>
          <Menu size={32} color="#ffffff" strokeWidth={2.5} />
        </button>
      </nav>

      {/* Main Hero Content */}
      <div className={styles.content}>
        <h2 className={styles.headline}>
          We're rebuilding how freight operations actually work.
        </h2>

        <div className={styles.buttonGroup}>
          <button className={styles.outlineBtn}>
            <span className={styles.btnText}>Join the Pilot</span>
            <div className={styles.hoverGlow}></div>
          </button>
          <button className={styles.outlineBtn}>
            <span className={styles.btnText}>Register your Interest</span>
            <div className={styles.hoverGlow}></div>
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
