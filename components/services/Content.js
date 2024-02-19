import { LinkCrewH2 } from "common";

export default function Content(props) {
  return (
    <div className="w-full text-center16" aria-label="各サービスのコンテンツ" id={props.title}>
      <LinkCrewH2 title={props.title} className="mt-10 mb-16"/>
      <div class="w-full text-center" aria-label="各サービスの詳細">
        <img src={props.service_img_path} alt="サービス画像" class="block m-auto w-full h-96 object-cover"/>
        {props.children}
      </div>
    </div>
  )
}