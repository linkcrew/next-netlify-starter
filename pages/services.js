import Header from '@components/Header'
import Footer from '@components/Footer'
import { LinkCrewH1, LinkCrewH2, LinkCrewDiv, LinkCrewH3 } from "common"
import Content from '@components/services/Content';
import Education from '@components/services/contents/Education';
import InHouseDev from '@components/services/contents/InHouseDev';
import CareerSupport from '@components/services/contents/CareerSupport';

export default function Services() {
  return (
    <div aria-label="ページ全体">
      <main className='mx-auto w-4/5'>
      <Header/>
        <div className="flex flex-col gap-y-40" >
          <div className="flex flex-col gap-y-5 text-center">
            <LinkCrewH1 title="Services" />
            <div className="mt-20" aria-label="サービス一覧のコンテンツ">
              <Content title="教育" service_img_path="/service1.png" >
                <Education />
              </Content>
              <Content title="開発" service_img_path="/service1.png" >
                <InHouseDev />
              </Content>
              <Content title="キャリア支援" service_img_path="/service1.png" >
                <CareerSupport />
              </Content>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}