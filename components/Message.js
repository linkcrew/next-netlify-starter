import { LinkCrewDiv, LinkCrewH2, LinkCrewH3 } from "common";

export default function Message() {
  const messageParts = [
    {
      title: "成長と学び舎",
      detail: "LiNKCREWは未経験からエンジニアとしての旅を始める方々だけでなく、既に経験を積んだエンジニアが新しいスキルを身につけ、更なるキャリアアップを目指すための学び舎を提供します。",
    },
    {
      title: "多様性と包括性",
      detail: "私たちは異なるバックグラウンドや経験を尊重し、受け入れます。多様性が私たちの強みであり、様々な視点から生まれるアイディアこそが新しい可能性を切り拓く原動力です。",
    },
    {
      title: "挑戦と創造性",
      detail: "LiNKCREWは、新しいアイディアを生み出すためのプレイグラウンドとして捉えています。失敗は成功の一部であり、挑戦を通じて新しい発見や成果を楽しみましょう。",
    },
    {
      title: "共感とサポート",
      detail: "LiNKCREWはチームワークを大切にし、メンバー同士がお互いにサポートし合える場所です。一緒に働く中で生まれる絆が、一人ひとりの成長を加速させます。",
    },
    {
      title: "社会への貢献",
      detail: "私たちは技術を通じて社会に良い影響を与えることに貢献したいと考えています。地域社会や世界への良い変化をもたらすプロジェクトに参加し、共に持続可能な未来を築き上げましょう。",
    },
    {
      title: "エンジニア同士の交流の場",
      detail: "LiNKCREWは単なる職場だけでなく、エンジニア同士が友情や知識を共有できるコミュニティでもあります。リラックスした雰囲気の中でお互いに助け合い、成長しましょう。",
    },
  ];

  return (
    <div className="flex flex-col gap-y-5">
      <LinkCrewH2 title="代表メッセージ" className="text-center mb-10"/>
      <LinkCrewDiv title="LiNKCREWは、未経験者からキャリアアップを目指すエンジニアまで、全てのエンジニアに対して成長の機会を提供し、新しい可能性を切り拓くお手伝いをすることを使命としています。" />
      <LinkCrewDiv title="私たちの目指すビジョンは、IT業界が全ての才能を開花し、互いに学び合い、支え合う場所となることです。" />
      <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-5 mt-10 mb-20">
        <div className="basis-1/3 my-auto mr-5">
          <img src="/ceo_photo.jpg" className="border-4 border-gray-300"/>
          <p className="img-font">代表:菅澤一貴</p>
        </div>
        <div className="flex flex-col gap-y-10 md:basis-2/3 ">
          {messageParts.map((value, index) => (
          <div key={index}>
            <LinkCrewH3 title={value.title} className="text-center" />
            <LinkCrewDiv title={value.detail} />
          </div>
          ))}
        </div>
      </div>
      <LinkCrewDiv title="LiNKCREWは、未経験者からキャリアアップを目指すエンジニアまで、全てのエンジニアにとっての新しいスタート地点です。一緒に素晴らしい未来を築くための仲間をお待ちしています。" />
    </div>
  )
}