import { LinkCrewH2 } from "common";

export default function Career() {
  const items = [
    {
      content: "千葉工業大学 未来ロボティクス学科 卒業",
      className: "step-primary",
    },
    {
      content: "2年間三菱重工にて機械設計業務",
      className: "step-primary",
    },
    {
      content: "IT業界に転身し、3年間インフラエンジニアとして業務に従事",
      className: "step-primary",
    },
    {
      content: "フリーランスエンジニアとして独立",
      className: "step-primary",
    },
    {
      content: "フリーランスエンジニアとしての経験を活かし、LiNKCREW株式会社を設立",
      className: "step-primary",
    },
    {
      content: "Next...",
      className: "",
    },
  ];

  return (
    <div className="flex flex-col gap-y-5 text-center">
      <LinkCrewH2 title="代表キャリア" className=""/>
      <ul className="steps steps-vertical mx-auto">
        {items.map((value, index) => (
          <li key={index} className={"step " + value.className}>{value.content}</li>
        ))}
      </ul>
    </div>
  )
}