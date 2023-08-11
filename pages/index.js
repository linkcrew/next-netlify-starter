import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Business from "@components/Business";
import UserComment from "@components/UserComment";
import CompanyProfile from "@components/CompanyProfile";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material";

const business_arr = [
  {
    title: "教育",
    content: `ビギナー向けの学習サポート環境を整備しています。

    IT系の学習は一人で始めるとつまずいて挫折することがあります。
    「プログラミングの学習手順が分からない」 「一人だと継続的に学習できない」 
    「つまずいた時に質問できる人がいない」
    このような課題に直面する前に、質問できる人や環境を準備しているのがLiNKCREWの教育活動です。
    例えば、プログラミング学習中に質問できる相手が身近にいればスムーズに学習を進められますし、何度も質問することで自分自身の理解を深められます。

    これからIT業界で働きたい、新しい技術を学びたいなど、一から学習する人に向けたサポートを提供することで、最初のハードルを越えられるようお手伝い致します。`
  },
  {
    title: "開発",
    content: `企画立案〜システム開発まで豊富な実務経験の場を提供しています。

    LiNKCREWでは、開発業務希望者が自己スキル・技術を向上させながら、自身のアイデアを形にできる素晴らしい機会を提供しています。
    例えば、自己スキル・技術向上のために自主学習用のオンライン勉強スペースやいつでも質問できる
    LINEグループなどがあります。
    また実務経験においては、Webアプリやモバイルアプリ開発、各種プログラミング言語の学習、インフラ環境の構築、プロジェクト管理などの豊富な経験機会を設け、実践的なスキル・技術を身に着けることが可能です。
    
    ゼロ知識でも不安なく開発系エンジニアのスタートアップができるようお手伝い致します。`
  },
  {
    title: "キャリア支援",
    content: `仕事の相談やサポート支援活動をしています。

    「残業を減らしたい」「収入をあげたい」などの様々な仕事の悩みがあるエンジニア業。LiNKCREWでは、様々な悩みに沿ったエンジニア転職支援を行います。フリーランスへ転身する場合には、確定申告のサポートにも対応します。
    LiNKCREWには、転職経験者やフリーランスエンジニアなど様々な経歴のエンジニアが在籍しており、幅広い分野のご相談に対応しています。
    また飲み会や旅行などの各種交流会を主催しており、エンジニア同士の交流を深められる環境も提供しています。

    皆さまの働きやすい環境づくりをお手伝い致します。`
  }
]

const comment_arr = [
  {
    img: "/sankasha_1_t.jpg",
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
    img: '/sankasha_2_y.jpg',
    content: `コードの学習を繰り返し出来る所がとても勉強になっています。
    コードが沢山あるので一度学習しても忘れてしまったりする事が多いのですが、同一のコードが繰り返し出てくるので、学習としてしっかり身に付けられていると思います。
    内容も初心者に分かりやすいものになっていて、とてもやりやすいです！
    他のIT従事者の方と色々と情報交換できてとても有意義な時間でした。`,
    name: "フリーランス Yさん"
  },
  {
    img: '/sankasha_3_r.JPG',
    content: `普段社外のエンジニアさんと関わることがないので、交流できる貴重な機会です。
    皆さん頑張ってることがあり刺激をもらえますし、仕事で悩んでいることの相談にものっていただけます。
    また仕事の話だけでなく、プライベートの話や遊びに行くこともあります。
    それぞれがやりたい事をコミュニティ内で実現してくれるので、色々なことを経験できます。
    温かい方ばかりですので、緊張せずお待ちしてます！`,
    name: "会社員 Rさん"
  }
]
const profile_arr = [
  {
    title: "会社名",
    content: "LiNKCREW",
    end: false
  },
  {
    title: "代表者名",
    content: "菅澤一貴",
    end: false
  },
  {
    title: "設立年月日",
    content: "2023年08月04日",
    end: false
  },
  {
    title: "資本金",
    content: "50万円",
    end: false
  },
  {
    title: "事業内容",
    content: "自社開発・独立支援",
    end: false
  },
  {
    title: '所在地',
    content: "東京都中央区銀座1丁目22番11号2F",
    end: false
  },
  {
    title: '連絡先',
    content: `電話：090-6175-7677
    mail：linkcrew.0329@gmail.com`,
    end: false
  },
  {
    title: '受付時間',
    content: '平日：9:00~18:00',
    end: true
  }
]

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    }
  }
})

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="box-border">
        <Head>
          <title>LiNKCREW</title>
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
          <Stack direction={{ xs:"column", md:"row"}}>
            {comment_arr.map((comment, index) => (
              <UserComment
                img={comment.img}
                content={comment.content}
                name={comment.name}
                key={index}
              />
            ))}
          </Stack>

          <div className="m-2">
            <h2 className="h1 text-black">会社概要</h2>
          </div>
          {profile_arr.map((profile, index) => (
            <CompanyProfile
                title={profile.title}
                content={profile.content}
                end={profile.end}
                key={index}
            />
          ))}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
