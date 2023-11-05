export default function UsersVoiceComponent() {
  const items = [
    {
      src: "/user_1_t.jpg",
      content: `LiNKCREWに参画して良かったと感じた部分は下記２点になります。
      ①多種多様な現場経験者・知見者から話を聞ける
      ②転職や新案件参画に有利となるヒント・具体的な行動を教えてもらえる(実際私が転職と現場変更を助けてもらってます)
      最近では、上記に加えて”学習の継続力”が身に付けられると実感しています。
      職場経験の他に+αで習熟させたいと思ったとき、スキマ時間での自己学習が思い浮かびますが、多くの方は習慣化できずに挫折する事が多いと思われます。
      共に学習する仲間や、24時間質問出来る環境があれば頑張れると思いませんか？
      何をどうしたらいいかがわからない方にとっての道標になるコミュニティですので
      是非気軽にご参加ください！`,
      name: "会社員 Tさん"
    },
    {
      src: "/user_2_y.jpg",
      content: `コードの学習を繰り返し出来る所がとても勉強になっています。
      コードが沢山あるので一度学習しても忘れてしまったりする事が多いのですが、同一のコードが繰り返し出てくるので、学習としてしっかり身に付けられていると思います。
      内容も初心者に分かりやすいものになっていて、とてもやりやすいです！
      他のIT従事者の方と色々と情報交換できてとても有意義な時間でした。`,
      name: "フリーランス Yさん"
    },
    {
      src: "/user_3_r.jpg",
      content: `普段社外のエンジニアさんと関わることがないので、交流できる貴重な機会です。
      皆さん頑張ってることがあり刺激をもらえますし、仕事で悩んでいることの相談にものっていただけます。
      また仕事の話だけでなく、プライベートの話や遊びに行くこともあります。
      それぞれがやりたい事をコミュニティ内で実現してくれるので、色々なことを経験できます。
      温かい方ばかりですので、緊張せずお待ちしてます！`,
      name: "会社員 Rさん"
    },
  ];

  return (
    <div className="flex flex-col gap-y-3">
      {items.map((value, index) =>
        <div key={index}>
          {index % 2 == 0 
            ? <div className="flex flex-row gap-x-5">
                <div className="flex flex-col my-auto">
                  <div className="text-left">{value.content}</div>
                  <div className="text-right">{value.name}</div>
                </div>
                <img src={value.src} className="w-[33.333333%] bg-none"/>
              </div>
            : <div className="flex flex-row gap-x-5">
                <img src={value.src} className="w-[33.333333%] bg-none"/>
                <div className="flex flex-col my-auto">
                  <div className="text-left">{value.content}</div>
                  <div className="text-right">{value.name}</div>
                </div>
              </div>
          }
        </div>
      )}
    </div>
  );
}