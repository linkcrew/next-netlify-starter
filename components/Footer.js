import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sitemap}>
        <div className={styles.sitemapSection}>
          <ul>
            <li><a href="/about">about</a></li>
            <li><a href="/services">services</a></li>
            <li><a href="/contact">contact</a></li>
          </ul>
        </div>
      </div>
      <div>
        <p>&copy; 2024 LiNKCREW Inc.</p>
      </div>
    </footer>
  )
}
