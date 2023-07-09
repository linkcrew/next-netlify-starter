import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer} id="footer">
        {/* <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} /> */}
        <p className="mr-8 text-white text-xl">お問い合わせはSNSのDMへ</p>
        <a href="https://www.instagram.com/yuuumi.desu/" className="mr-2">
          <img src="/Instagram_Glyph_White.svg" alt="Insragram Logo" className={styles.logo} />
        </a>
        <a href="https://twitter.com/kaaaaaaaazuuuu" className="mr-2">
          <img src="/twitter_logo_white.svg" alt="Twitter Logo" className={styles.logo} />
        </a>
        <a href="https://lin.ee/2yYDBhD">
          <img src="/LINE_Brand_icon.png" alt="Line Logo" className={styles.logo} />
        </a>
      </footer>
    </>
  )
}
