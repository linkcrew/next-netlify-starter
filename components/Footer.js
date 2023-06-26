import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        {/* <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} /> */}
        <p className="mr-8">お問い合わせはSNSのDMへ</p>
        <a href="https://www.instagram.com/yuuumi.desu/" className="mr-2">
          <img src="/v982-d4-01_instagram.png" alt="Insragram Logo" className={styles.logo} />
        </a>
        <a href="https://twitter.com/kaaaaaaaazuuuu" className="mr-2">
          <img src="/v982-d4-01_twitter.png" alt="Twitter Logo" className={styles.logo} />
        </a>
        <a href="https://lin.ee/2yYDBhD">
          <img src="/v982-d4-01_line.png" alt="Line Logo" className={styles.logo} />
        </a>
      </footer>
    </>
  )
}
