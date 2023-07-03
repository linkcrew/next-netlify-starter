import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Business from '@components/Business'; 
import UserComment from '@components/UserComment';
import Stack from '@mui/material/Stack';

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

      <main className='container mx-auto'>
        <Header />
        {/* <Header title={COMPANY_NAME} /> */}
        {/* <h2 className='text-left text-5xl m-auto'>事業内容</h2>
        <div className="text-center grid grid-cols-3 gap-y-4 m-auto">
          <div className='flex items-center justify-center rounded-lg bg-emerald-500 text-3xl text-white p-4'>教育</div>
          <div className='flex items-center justify-center col-span-2 rounded-lg bg-emerald-300'>BSDを利用した教育サービスを提供しています。<br />BSDを利用した教育サービスを提供しています。</div>
          <div className='flex items-center justify-center rounded-lg bg-emerald-500 text-3xl text-white p-4'>開発</div>
          <div className='flex items-center justify-center col-span-2 rounded-lg bg-emerald-300'>BSDを利用した教育サービスを提供しています。<br />BSDを利用した教育サービスを提供しています。</div>
          <div className='flex items-center justify-center rounded-lg bg-emerald-500 text-3xl text-white p-4'>支援</div>
          <div className='flex items-center justify-center col-span-2 rounded-lg bg-emerald-300'>BSDを利用した教育サービスを提供しています。<br />BSDを利用した教育サービスを提供しています。</div>
        </div> */}

        <div></div>
        <div className="subtitle">
          <h2>事業内容</h2>
        </div>
        {business_arr.map((business, index) => (
          <Business title={business.title} content={business.content} key={index} />
        ))}

        <div className="subtitle-user-comment">
          <h2>利用者・参加者の声</h2>
        </div>
        <Stack direction="row">
          {comment_arr.map((comment, index) => (
              <UserComment img={comment.img} content={comment.content} name={comment.name} key={index} />
          ))}
        </Stack>
      </main>

      <Footer />
      {/* </div> */}
    </div>
  )
}
