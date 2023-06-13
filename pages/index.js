import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Business from '@components/Business';

const COMPANY_NAME = "LINKCREW"

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

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>{COMPANY_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={COMPANY_NAME} />
        <div className="subtitle">
          <h2>事業内容</h2>
        </div>
        {business_arr.map((business, index) => (
          <Business title={business.title} content={business.content} key={index} />
        ))}
      </main>

      <Footer />
    </div>
  )
}
