import Link from "next/link";
import { IconBrandLine } from "@components/common/Icon";
import ContactGoogleForm from "@components/contact/GoogleForm";
import { LinkCrewDiv } from "common";

export default function ContactComponent() {
  return (
    <div className="flex flex-col gap-y-5 text-center items-center">
      <LinkCrewDiv title="弊社へのお問い合わせは公式LINEまたは下記のフォームよりお願いいたします。" />
      <LinkCrewDiv title="（公式LINEのご登録はこちらから）" className="mt-10"/>
      <Link href="https://lin.ee/YEKMoqp" className="w-20 h-20 mb-10 hover:cursor-pointer" target="_blank">
        <IconBrandLine />
      </Link>
      <LinkCrewDiv title="内容を確認の上、担当よりご返信させていただきますので、お時間いただく可能性がございます。"/>
      <LinkCrewDiv title="また、お問い合わせいただいた内容によってはご返信できない場合がございます。あらかじめご了承ください。"/>
      <ContactGoogleForm />
    </div>
  )
}