import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Business from "@components/Business";
import UserComment from "@components/UserComment";
import Stack from "@mui/material/Stack";

const business_arr = [
  {
    title: "教育",
    content: `**ビギナー向けの学習サポート環境を整備しています。**

    IT系の学習は一人で始めるとつまずいて挫折することがあります。
    
    **「プログラミングの学習手順が分からない」
    「一人だと続かなくて挫折しやすい」
    「つまずいた時に質問できる人がいない」**
    
    このような課題に直面する前に、質問できる人や環境を準備しているのが当サロンの教育活動です。
    
    特にプログラミング学習においては、質問できる相手がいるとスムーズに進めることができますし、質問することで自分自身の理解を深めることもできます。IT業界で働いていみたい、新しい技術を学びたいなど、１から学習する人に向けたサポートを提供することで、最初のハードルを越えるお手伝いをさせていただきます。`
  },
  {
    title: "開発",
    content: `**企画立案から行うシステム開発活動をしています。**
    開発業務を行いたい方々が自分の技術やスキルを相談して自分のアイデアを形にできる素晴らしい機会を提供しています。
    **サロンでは自分のペースで進められるのが魅力です。**技術的な共有、モチベーションの維持まで相談に乗っています。
    アイデアを実現するために、ウェブアプリやモバイルアプリの開発、新しいプログラミング言語の学習、デザインの改善、自分のプロジェクト管理などの経験やスキルを身に着けることが可能です。`
  },
  {
    title: "支援",
    content: `**仕事の相談やサポート支援活動をしています。**

    残業を減らしたい、収入をあげたい…様々な仕事の悩みがあるエンジニア業。その悩みに沿った転職案内などを行います。フリーランスへ転身する場合には、確定申告のサポートなどにも対応します。
    
    サロン内には転職経験者やフリーランスエンジニアなど様々な経歴のエンジニアがいるので、相談もしやすい環境となっています。
    
    皆さまの働きやすい環境づくりをお手伝いさせていただきます。`
  }
]

const comment_arr = [
  {
    img: "/IMG_20230716_100543.jpg",
    content: `私たちのサロンでは、システム開発活動をしています。
    開発業務を行いたい方々が自分の技術やスキルを相談して自分のアイデアを形にできる素晴らしい機会を提供しています。
    サロンでは自分のペースで進められるのが魅力です。技術的な共有、モチベーションの維持まで相談に乗っています。
    アイデアを実現するために、ウェブアプリやモバイルアプリの開発、新しいプログラミング言語の学習、デザインの改善、自分のプロジェクト管理などの経験やスキルを身に着けることが可能です。`,
    name: "会社員 Tさん"
  },
  {
    img: '/arcify-2560x1600.png',
    content: `コードの学習を繰り返し出来る所がとても勉強になっています。
    コードが沢山あるので一度学習しても忘れてしまったりする事が多いのですが、同一のコードが繰り返し出てくるので、学習としてしっかり身に付けられていると思います。
    内容も初心者に分かりやすいものになっていて、とてもやりやすいです！
    他のIT従事者の方と色々と情報交換できてとても有意義な時間でした。`,
    name: "フリーランス Yさん"
  },
  {
    img: '/IMG_8379.JPG',
    content: `普段社外のエンジニアさんと関わることがないので、交流できる貴重な機会です。
    皆さん頑張ってることがあり刺激をもらえますし、仕事で悩んでいることの相談にものっていただけます。
    また仕事の話だけでなく、プライベートの話や遊びに行くこともあります。
    それぞれがやりたい事をコミュニティ内で実現してくれるので、色々なことを経験できます。
    温かい方ばかりですので、緊張せずお待ちしてます！`,
    name: "会社員 Rさん"
  }
]

export default function Home() {
  return (
    <div className="box-border">
      <Head>
        <title>LINKCREW</title>
        <link rel="icon" href="/LINKCREW-logo.png" />
      </Head>

      <main className="flex p-0 flex-auto flex-col items-center">
        <Header />

        <a href="#footer">
          <div className="fixed top-0 right-0 p-[30px] bg-base-green text-white">
            <span>お問い合わせ↓</span>
          </div>
        </a>
        <div className="m-2">
          <h2 className="h2">事業内容</h2>
        </div>
        {business_arr.map((business, index) => (
          <Business
            title={business.title}
            content={business.content}
            key={index}
          />
        ))}

        <div className="m-2">
          <h2 className="h2">利用者・参加者の声</h2>
        </div>
        <Stack direction="row">
          {comment_arr.map((comment, index) => (
            <UserComment
              img={comment.img}
              content={comment.content}
              name={comment.name}
              key={index}
            />
          ))}
        </Stack>
      </main>

      <Footer />
    </div>
  );
}
