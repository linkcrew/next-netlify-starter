import { LinkCrewH2 } from "common";

export default function Content(props) {
  return (
    <div className="w-full text-center mt-32" aria-label="各サービスのコンテンツ">
      <LinkCrewH2 title={props.title} className="mb-16"/>
      <div class="w-full text-center" aria-label="各サービスの詳細">
        <img src={props.service_img_path} alt="サービス画像" class="block m-auto"/>
        {props.children}
      </div>
    </div>
  )
}