import { LinkCrewDiv } from "common";

export default function Top() {
  return (
    <div className="w-1/2">
      <div>
        <img src="/header.svg" className="mx-auto my-auto" />
        <LinkCrewDiv
          title="仕事の垣根を超えてつながる大切なエンジニア仲間"
          className="text-left title-subtitle"
        />
        <p className="title-comment">
          いつでも相談できる環境があるいつでも参加できる集まりがあるいつでも教えてくれる仲間がいるLiNKCREW（リンクルー）は英語の「Link（繋がる）」と「Crew（クルー）」という言葉の造語ですエンジニア同士で情報交換やシステム開発を行い「相乗効果でエンジニアそれぞれのバリューを上げていく」「生涯を通して公私ともに繋がっていける仲間を作る」そんな思いを込めています
        </p>
      </div>
    </div>
  );
}
