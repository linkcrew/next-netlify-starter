import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Business from '@components/Business'; 
import UserComment from '@components/UserComment';
import Stack from '@mui/material/Stack';

const business_arr = [{
    title: "教育",
    content: `私たちのサロンでは、システム開発活動をしています。\n
    開発業務を行いたい方々が自分の技術やスキルを相談して自分のアイデアを形にできる素晴らしい機会を提供しています。
    サロンでは自分のペースで進められるのが魅力です。技術的な共有、モチベーションの維持まで相談に乗っています。\n
    アイデアを実現するために、ウェブアプリやモバイルアプリの開発、新しいプログラミング言語の学習、デザインの改善、自分のプロジェクト管理などの経験やスキルを身に着けることが可能です。`
  },
  {
    title: "開発",
    content: `私たちのサロンでは、システム開発活動をしています。\n
    開発業務を行いたい方々が自分の技術やスキルを相談して自分のアイデアを形にできる素晴らしい機会を提供しています。
    サロンでは自分のペースで進められるのが魅力です。技術的な共有、モチベーションの維持まで相談に乗っています。\n
    アイデアを実現するために、ウェブアプリやモバイルアプリの開発、新しいプログラミング言語の学習、デザインの改善、自分のプロジェクト管理などの経験やスキルを身に着けることが可能です。`
  },
  {
    title: "支援",
    content: `私たちのサロンでは、システム開発活動をしています。\n
    サロンでは自分のペースで進められるのが魅力です。技術的な共有、モチベーションの維持まで相談に乗っています。\n
    アイデアを実現するために、ウェブアプリやモバイルアプリの開発、新しいプログラミング言語の学習、デザインの改善、自分のプロジェクト管理などの経験やスキルを身に着けることが可能です。`
  }
]

const comment_arr = [{
    img: '/arcify-2560x1600.png',
    content: `私たちのサロンでは、システム開発活動をしています。\n
    開発業務を行いたい方々が自分の技術やスキルを相談して自分のアイデアを形にできる素晴らしい機会を提供しています。
    サロンでは自分のペースで進められるのが魅力です。技術的な共有、モチベーションの維持まで相談に乗っています。\n
    アイデアを実現するために、ウェブアプリやモバイルアプリの開発、新しいプログラミング言語の学習、デザインの改善、自分のプロジェクト管理などの経験やスキルを身に着けることが可能です。`,
    name: "津田塾大学 Nさん"
  },
  {
    img: '/arcify-2560x1600.png',
    content: `私たちのサロンでは、システム開発活動をしています。\n
    開発業務を行いたい方々が自分の技術やスキルを相談して自分のアイデアを形にできる素晴らしい機会を提供しています。
    サロンでは自分のペースで進められるのが魅力です。技術的な共有、モチベーションの維持まで相談に乗っています。\n
    アイデアを実現するために、ウェブアプリやモバイルアプリの開発、新しいプログラミング言語の学習、デザインの改善、自分のプロジェクト管理などの経験やスキルを身に着けることが可能です。`,
    name: "津田塾大学 Nさん"
  },
  {
    img: '/arcify-2560x1600.png',
    content: `私たちのサロンでは、システム開発活動をしています。\n
    サロンでは自分のペースで進められるのが魅力です。技術的な共有、モチベーションの維持まで相談に乗っています。\n
    アイデアを実現するために、ウェブアプリやモバイルアプリの開発、新しいプログラミング言語の学習、デザインの改善、自分のプロジェクト管理などの経験やスキルを身に着けることが可能です。`,
    name: "津田塾大学 Nさん"
  }
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>LINKCREW</title>
        <link rel="icon" href='/LINKCREW-logo.png' />
      </Head>

      <main>
        <Header />

        <div></div>
        <div>
          <h2>事業内容</h2>
        </div>
        {business_arr.map((business, index) => (
          <Business title={business.title} content={business.content} key={index} />
        ))}

        <div>
          <h2>利用者・参加者の声</h2>
        </div>
        <Stack direction="row">
          {comment_arr.map((comment, index) => (
              <UserComment img={comment.img} content={comment.content} name={comment.name} key={index} />
          ))}
        </Stack>
      </main>

      <Footer />
    </div>
  )
}
