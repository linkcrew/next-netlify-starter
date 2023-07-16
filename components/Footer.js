export default function Footer() {
  return (
    <div>
      <footer
        className="flex w-full h-full border-t-[1px] border-footer-white border-solid justify-center items-center bg-base-green"
        id="footer"
      >
        <p className="mr-8 text-white text-xl">お問い合わせはSNSのDMへ</p>
        <a href="https://www.instagram.com/yuuumi.desu/" className="mr-2">
          <img
            src="/Instagram_Glyph_White.svg"
            alt="Insragram Logo"
            className="h-[3em] m-[5px]"
          />
        </a>
        <a href="https://twitter.com/kaaaaaaaazuuuu" className="mr-2">
          <img
            src="/twitter_logo_white.svg"
            alt="Twitter Logo"
            className="h-[3em] m-[5px]"
          />
        </a>
        <a href="https://lin.ee/2yYDBhD">
          <img
            src="/LINE_Brand_icon.png"
            alt="Line Logo"
            className="h-[3em] m-[5px]"
          />
        </a>
      </footer>
    </div>
  );
}
