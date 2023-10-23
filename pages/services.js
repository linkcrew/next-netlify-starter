import Header from '@components/Header'

export default function Services() {
  return (
    <div className="screen" aria-label="ページ全体">
      <Header/>
      <div className="screen_content" aria-label="ヘッダー下のコンテンツ">
        <p class="text-6xl mt-20">Services</p>
        <div class="mt-20 w-4/5" aria-label="サービス一覧のコンテンツ">
        {/* <section id="box1" class="box" data-section-name="開発">
        </section>
        <section id="box2" class="box" data-section-name="教育">
        </section>
        <section id="box3" class="box" data-section-name="キャリア支援">
        </section> */}
          <div class="w-full" aria-label="各サービスのコンテンツ">
            <p class="text-4xl text-center">開発</p>
            <div class="w-full mt-28" aria-label="各サービスの詳細">
              <div className="box" aria-label="サービス画像のコンテンツ">
                <div className="gizagiza_box_content">
                  <img src="/img/img.png" alt="サービス画像" className="gizagiza_box_img" />
                </div>
              </div>
              {/* <div className="box" aria-label="サービス説明のコンテンツ">
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}