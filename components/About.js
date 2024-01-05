import { LinkCrewH1, LinkCrewH2, LinkCrewDiv } from "common"

export default function About() {
  return (
    <div className="flex flex-col gap-y-5 text-center">
      <LinkCrewH2 title="仕事の垣根を超えてつながる" />
      <LinkCrewH2 title="大切なエンジニア仲間" />
      <div className="mx-auto flex flex-col gap-y-1.5 min-w-min">
        <LinkCrewDiv title="「エンジニアの待遇や働く環境を改善し　みんなでスキル向上を図りたい」" className="text-left" />
        <LinkCrewDiv title="そんな同じ志を持ったクルー（CREW）がつながる（LINK）場として生まれました" className="text-left" />
        <LinkCrewDiv title="残業が多い仕事が続いている、身につけたい技術ではない仕事をやらされている..." className="text-left" />
        <LinkCrewDiv title="悩みや不安を抱えているエンジニアの方々の支援や教育活動を行います" className="text-left" />
      </div>
    </div>
  )
}