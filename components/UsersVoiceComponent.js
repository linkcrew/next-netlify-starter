import { LinkCrewDiv, LinkCrewH3 } from "common";

export default function UsersVoiceComponent() {
  const items = [
    {
      src: "/user_1_t.jpg",
      title: `一緒に励ましあえる仲間ができた`,
      content: `LiNKCREWに参画して良かったと感じた部分は下記２点になります。
      ①多種多様な現場経験者・知見者から話を聞ける
      ②転職や新案件参画に有利となるヒント・具体的な行動を教えてもらえる(実際私が転職と現場変更を助けてもらってます)
      最近では、上記に加えて”学習の継続力”が身に付けられると実感しています。
      職場経験の他に+αで習熟させたいと思ったとき、スキマ時間での自己学習が思い浮かびますが、多くの方は習慣化できずに挫折する事が多いと思われます。
      共に学習する仲間や、24時間質問出来る環境があれば頑張れると思いませんか？
      何をどうしたらいいかがわからない方にとっての道標になるコミュニティですので
      是非気軽にご参加ください！`,
      name: "会社員 Tさん",
    },
    {
      src: "/user_2_y.jpg",
      title: `初学者にも取り組みやすい内容なので、無理なく続けることができました`,
      content: `コードの学習を繰り返し出来る所がとても勉強になっています。
      コードが沢山あるので一度学習しても忘れてしまったりする事が多いのですが、同一のコードが繰り返し出てくるので、学習としてしっかり身に付けられていると思います。
      内容も初心者に分かりやすいものになっていて、とてもやりやすいです！
      他のIT従事者の方と色々と情報交換できてとても有意義な時間でした。`,
      name: "フリーランス Yさん",
    },
    {
      src: "/user_3_r.jpg",
      title: `自分の中で新しい場所が見つかりました`,
      content: `普段社外のエンジニアさんと関わることがないので、交流できる貴重な機会です。
      皆さん頑張ってることがあり刺激をもらえますし、仕事で悩んでいることの相談にものっていただけます。
      また仕事の話だけでなく、プライベートの話や遊びに行くこともあります。
      それぞれがやりたい事をコミュニティ内で実現してくれるので、色々なことを経験できます。
      温かい方ばかりですので、緊張せずお待ちしてます！`,
      name: "会社員 Rさん",
    },
  ];

  return (
    <div className="flex flex-col gap-y-5">
      {items.map((value, index) =>
        <div key={index} className="m-5">
          {index % 2 == 0 
            ? <div className="flex flex-col gap-x-5 md:flex-row">
                <img src={value.src} className="w-[100%] md:w-[0%] bg-none border-4 md:border-0 border-gray-300"/>
                <div className="flex flex-col basis-4/5 my-auto">
                  <LinkCrewH3 title={value.title} className="text-left" />
                  <br />
                  <LinkCrewDiv title={value.content} className="text-left" />
                  <LinkCrewDiv title={value.name} className="text-right" />
                </div>
                <div className="w-[0%] md:basis-1/5 my-auto">
                  <img src={value.src} className="bg-none border-0 md:border-4 border-gray-300"/>
                </div>
              </div>
            : <div className="flex flex-col gap-x-5 md:flex-row">
                <div className="w-[100%] md:basis-1/5 my-auto">
                  <img src={value.src} className="bg-none border-4 border-gray-300"/>
                </div>
                <div className="flex flex-col basis-4/5 my-auto">
                  <LinkCrewH3 title={value.title} className="text-left" />
                  <br />
                  <LinkCrewDiv title={value.content} className="text-left" />
                  <LinkCrewDiv title={value.name} className="text-right" />
                </div>
              </div>
          }
        </div>
      )}
    </div>
  );
}