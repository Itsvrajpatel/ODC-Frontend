"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = 190;
      const duration = 2000;
      const incrementTime = (duration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    } else {
      // Reset the count so it counts up again next time it enters the viewport
      setCount(0);
    }
  }, [isVisible]);

  return (
    <section className={styles.aboutSection} ref={sectionRef}>
      <div className={styles.container}>
        
        {/* Left Column: Stat Card */}
        <div className={`${styles.cardWrapper} ${isVisible ? styles.animateUp : ''}`}>
          <div className={styles.statCard}>
            <div className={styles.cardHeader}>
              <h3>Pilot Sign Ups</h3>
            </div>
            <div className={styles.cardDivider}></div>
            <div className={styles.cardBody}>
              <div className={styles.number}>
                {count.toString().padStart(4, '0')}
              </div>
              <p className={styles.label}>
                Drivers & Operators<br/>onboard
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className={`${styles.textContent} ${isVisible ? styles.animateFadeIn : ''}`}>
          <h2 className={styles.heading}>
            A platform built for safer, compliant road transport
          </h2>
          
          <div className={styles.paragraphs}>
            <p>
              Owner Driver Collective is a freight platform built on a clear principle: 
              when systems are designed properly, safer work follows.
            </p>
            
            <p>
              It brings job allocation, duty records, and compliance support into a single 
              operational framework that reflects how road transport actually runs. By aligning 
              these elements, the platform removes uncertainty at the start of a job and 
              reduces pressure while work is underway, giving drivers, operators, and shippers 
              greater confidence in everyday decisions.
            </p>
            
            <p className={styles.highlightText}>
              Built for real operations. Inspection-ready. Non-punitive by design.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
