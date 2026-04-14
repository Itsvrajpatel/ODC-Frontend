"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './Features.module.css';

const features = [
  {
    id: '01',
    tag: 'Industry Reality',
    title: 'Road transport is under constant pressure',
    body: [
      'Many businesses still rely on disconnected systems, manual processes, and retrospective compliance checks. Work and rest records are often reconstructed after the fact, and fatigue risk is identified when options are already limited.',
      'This approach creates uncertainty for drivers and risk for operators and shippers. It also places responsibility on individuals without giving them the systems needed to manage it properly.',
    ],
    image: '/assets/IndustryReality.jpeg',
    imageAlt: 'Freight trucks at a depot',
    accent: '#f97316',
  },
  {
    id: '02',
    tag: 'The Platform',
    title: 'One operational view for the entire chain',
    body: [
      'Owner Driver Collective brings job allocation, duty recording, and compliance guidance into one operational view.',
      'Work is assessed before it reaches drivers, reducing unsafe or unsuitable allocation at the outset. Duty and rest are recorded digitally through a structured electronic work diary, creating consistent records ready for inspection or audit without additional preparation.While work is underway, the platform provides practical prompts that support compliant decisions around rest and duty changes.',
    ],
    image: '/assets/Platform.jpeg',
    imageAlt: 'Digital technology platform',
    accent: '#2563eb',
  },
  {
    id: '03',
    tag: 'About - Owner Driver Collective!',
    title: 'ODC was created in response to long-standing structural issues in road transport.',
    body: [
      'Too often, work is allocated without a lear view of compliance impact, records are maintained separately from job planning, and responsibility is pushed down the chain rather than managed where decisions are made.',
      'Designed to support responsible allocation, accurate records, and practical guidance, so safety and compliance are part of normal operations rather than an afterthought.',
    ],
    image: '/assets/aboutODC.jpeg',
    imageAlt: 'Driver on the road',
    accent: '#16a34a',
  },
  {
    id: '04',
    tag: 'How ODC works in practice?',
    title: 'One operational view for planning, work, and records.',
    body: [
      'Allocate jobs with visibility of compliance impact, maintain accurate duty records, and support decisions as work is carried out.',
    ],
    list: [
      { icon: '🖥️', label: 'Upstream job screening' },
      { icon: '📋', label: 'Integrated duty records' },
      { icon: '🔄', label: 'In-day operational guidance' },
      { icon: '🤝', label: 'Shared responsibility model' },
    ],
    image: '/assets/ODCworks.jpeg',
    imageAlt: 'Compliance documentation',
    imagePosition: 'left top',
    accent: '#7c3aed',
  },
];

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.featureRow} ${isEven ? styles.rowNormal : styles.rowReverse} ${visible ? styles.visible : ''}`}
    >
      {/* Text Panel */}
      <div className={styles.textPanel}>
        <div className={styles.tagRow}>
          <span className={styles.numberBadge} style={{ color: feature.accent, borderColor: feature.accent }}>
            {feature.id}
          </span>
          <span className={styles.tag} style={{ color: feature.accent }}>{feature.tag}</span>
        </div>
        <h3 className={styles.featureTitle}>{feature.title}</h3>
        <div className={styles.featureBody}>
          {feature.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        {feature.list && (
          <ul className={styles.featureList}>
            {feature.list.map((item, i) => (
              <li key={i}>{item.icon} {item.label}</li>
            ))}
          </ul>
        )}
        <div className={styles.accentLine} style={{ background: feature.accent }}></div>
      </div>

      {/* Image Panel */}
      <div className={styles.imagePanel}>
        <div className={styles.imageFrame} style={{ '--accent': feature.accent }}>
          <img
            src={feature.image}
            alt={feature.imageAlt}
            className={styles.featureImg}
            style={{ objectPosition: feature.imagePosition || 'center' }}
          />
          <div className={styles.imageOverlay} style={{ background: `${feature.accent}22` }}></div>
        </div>
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionEyebrow}>How it works</p>
        <h2 className={styles.sectionTitle}>Built around how transport actually runs</h2>
      </div>

      <div className={styles.timeline}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
