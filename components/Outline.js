import { LinkCrewDiv, LinkCrewH2 } from "common";

export default function Outline() {
  const items = [
    {
      title: "会社名",
      details: [
        {
          detail: "LiNKCREW株式会社",
        },
      ],
    },
    {
      title: "代表者名",
      details: [
        {
          detail: "菅澤一貴",
        },
      ],
    },
    {
      title: "設立年月日",
      details: [
        {
          detail: "2023年8月4日",
        },
      ],
    },
    {
      title: "資本金",
      details: [
        {
          detail: "50万円",
        },
      ],
    },
    {
      title: "事業内容",
      details: [
        {
          detail: "独立支援・自社開発",
        },
      ],
    },
    {
      title: "所在地",
      details: [
        {
          detail: "東京都中央区銀座1丁目22番11号2F",
        },
      ],
    },
    {
      title: "連絡先",
      details: [
        {
          detail: "電話: 090-6125-7677",
        },
        {
          detail: "メールアドレス: linkcrew.0329@gmail.com",
        },
      ],
    },
    {
      title: "受付時間",
      details: [
        {
          detail: "平日: 09:00~18:00",
        },
      ],
    },
    {
      title: "会社名",
      details: [
        {
          detail: "LiNKCREW株式会社",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-y-5 w-full text-center">
      <LinkCrewH2 title="会社概要" className="mb-10" />
      {items.map((value, index) => (
        <div key={index} className="card bg-primary">
          <div className="card-body flex flex-row">
            <LinkCrewDiv title={value.title} className="basis-1/3 my-auto" />
            <div className="basis-2/3 my-auto">
              {value.details.map((detailValue, detailIndex) => (
                <div key={detailIndex}>
                  <LinkCrewDiv title={detailValue.detail} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
