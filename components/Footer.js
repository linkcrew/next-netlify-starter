import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sitemap}>
        <div className={styles.sitemapSection}>
          <ul>
            <li><a href="/about">about</a></li>
            <li><a href="/services">services</a></li>

          </ul>
        </div>
        <div className={styles.sitemapSection}>
          <ul>
            <li><a href="/contact">contact</a></li>
            <li><a href="https://translucent-maiasaura-850.notion.site/6a1635d21b644c87b7860f019e026ba9?pvs=4">privacy policy</a></li>
          </ul>
        </div>
      </div>
      <div>
        <p>&copy; 2024 LiNKCREW Inc.</p>
      </div>
    </footer>
  )
}
