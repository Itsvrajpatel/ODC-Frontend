import styles from './Banner.module.css';

export default function Banner() {
  return (
    <section className={styles.bannerSection}>
      {/* Background */}
      <div className={styles.bgWrapper}>
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
