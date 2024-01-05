import { LinkCrewH1 } from "common"
import Content from '@components/services/Content';
import Education from '@components/services/contents/Education';
import InHouseDev from '@components/services/contents/InHouseDev';
import CareerSupport from '@components/services/contents/CareerSupport';

const services = [
  {
    title: "教育",
    service_img_path: "/service1.png",
    content: <Education />
  },
  {
    title: "開発",
    service_img_path: "/service1.png",
    content: <InHouseDev />
  },
  {
    title: "キャリア支援",
    service_img_path: "/service1.png",
    content: <CareerSupport />
  },
]

export default function ServicesComponent() {
  return (
    <div className="flex flex-col gap-y-5 text-center">
      <LinkCrewH1 title="Services" />
      <div aria-label="サービス一覧のコンテンツ">
        {services.map((service, index) => (
          <Content key={index} title={service.title} service_img_path={service.service_img_path} >
            {service.content}
          </Content>
        ))}
      </div>
    </div>
  )
}