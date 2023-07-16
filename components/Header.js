export default function Header() {
  return (
    <header className="w-full relative">
      <img
        src="/LINKCREW-header.jpeg"
        layout="fill"
        alt="header"
        className="w-full"
      />
      <div className="absolute text-white tracking-widest font-header  text-2xl top-[20vw] left-[5vw]">
        <p>仕事の垣根を超えて</p>
        <p>つながる大切なエンジニア仲間</p>
      </div>
      {/* <div>
      <p>「エンジニアの待遇や働く環境を改善し　みんなでスキル向上を図りたい」</p>
      <p>そんな同じ志を持ったクルー（CREW）がつながる（LINK）場として生まれました</p>
      <p>残業が多い仕事が続いている、身につけたい技術ではない仕事をやらされている...</p>
      <p>悩みや不安を抱えているエンジニアの方々の支援や教育活動を行います</p>
    </div> */}
    </header>
  );
}
