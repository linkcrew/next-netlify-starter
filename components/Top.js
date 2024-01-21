import { LinkCrewH2, LinkCrewH3 } from "common";

export default function Top() {
  return (
    <div className="">
      <div>
        <img src="/corporate_header.svg" className="mx-auto my-auto" />
        <LinkCrewH2 title="いつでも相談できる環境がある" className="text-center" />
        <LinkCrewH2 title="いつでも参加できる集まりがある" className="text-center" />
        <LinkCrewH2 title="いつでも教えてくれる仲間がいる" className="text-center" />
        <br></br>
        <LinkCrewH3 title="LiNKCREW（リンクルー）は英語の「Link（つながる）」と「Crew（クルー）」という言葉の造語です" className="text-center" />
        <LinkCrewH3 title="エンジニア同士で情報交換やシステム開発を行い" className="text-center" />
        <LinkCrewH3 title="「相乗効果でエンジニアそれぞれのバリューを上げていく」" className="text-center" />
        <LinkCrewH3 title="「生涯を通して公私ともに繋がっていける仲間を作る」" className="text-center" />
        <LinkCrewH3 title="そんな思いを込めています" className="text-center" />
      </div>
    </div>
  );
}