export default function Footer() {
  return (
    <div>
      <footer
        className="flex flex-row w-full h-full border-t-[1px] border-footer-white border-solid justify-center items-center bg-base-green"
        id="footer"
      >
        <p className="text-white text-xl">お問い合わせはSNSのDMへ</p>
        <a href="https://www.instagram.com/yuuumi.desu/" className="mr-2">
          <img
            src="/Instagram_logo.svg"
            alt="Insragram Logo"
            className="h-[3em] m-[5px]"
          />
        </a>
        <a href="https://twitter.com/kazutech1" className="mr-2">
          <img
            src="/X_logo.svg"
            alt="X Logo"
            className="h-[3em] m-[5px]"
          />
        </a>
        <a href="https://lin.ee/2yYDBhD" className="mr-2">
          <img
            src="/LINE_logo.png"
            alt="Line Logo"
            className="h-[3em] m-[5px]"
          />
        </a>
      </footer>
    </div>
  );
}
