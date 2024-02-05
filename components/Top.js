import { LinkCrewDiv, LinkCrewH3} from "common";

export default function Top() {
  return (
    <div className="">
      <div>
        <img src="/corporate_header.svg" className="mx-auto my-auto mb-10" />
        <LinkCrewH3 title="いつでも相談できる環境がある" className="text-center" />
        <LinkCrewH3 title="いつでも参加できる集まりがある" className="text-center" />
        <LinkCrewH3 title="いつでも教えてくれる仲間がいる" className="text-center" />
        <br />
        <LinkCrewDiv title="LiNKCREW（リンクルー）は英語の「Link（つながる）」と「Crew（クルー）」という言葉の造語です" className="text-center" />
        <LinkCrewDiv title="エンジニア同士で情報交換やシステム開発を行い" className="text-center" />
        <LinkCrewDiv title="「相乗効果でエンジニアそれぞれのバリューを上げていく」" className="text-center" />
        <LinkCrewDiv title="「生涯を通して公私ともに繋がっていける仲間を作る」" className="text-center" />
        <LinkCrewDiv title="そんな思いを込めています" className="text-center" />
      </div>
    </div>
  );
}