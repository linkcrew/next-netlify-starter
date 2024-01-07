import { useRouter } from 'next/router'

export default function ContactGoogleForm() {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!e.target[0].value) {
      alert('氏名を入力してください')
      return
    }
    if (!e.target[2].value) {
      alert('メールアドレスを入力してください')
      return
    }
    if ( !e.target[3].checked && !e.target[4].checked && !e.target[5].checked && !e.target[6].checked && !e.target[7].checked) {
      alert('お問い合わせ項目を選択してください')
      return
    }
    if (!e.target[8].value) {
      alert('お問い合わせ内容を入力してください')
      return
    }

    e.target.submit();
    router.push('/contact_thanks')
  }

  return (
    <div className="w-full mt-10">
      <form 
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdrjcNaG7TGt6A_5IAadRql_tI1nsnukF9GYcKInZTjFwjG9Q/formResponse?embedded=true"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
      >
        <div className="md:flex mb-20">
          <div className="md:w-1/3">
            <div className="div">
              氏名
              <div className="input-div-with-helper-text mr-5 text-red-600 text-sm">※必須</div>
            </div>
          </div>
          <div className="md:w-full">
            <input
              name="entry.1780721743"
              type="text"
              placeholder="山田太郎"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex mb-20">
          <div className="md:w-1/3">
            <div className="div">
              会社名（任意）
            </div>
          </div>
          <div className="md:w-full">
            <input
              name="entry.1033311784"
              type="text"
              placeholder="LiNKCREW株式会社"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex mb-20">
          <div className="md:w-1/3">
            <div className="div">
              メールアドレス
              <div className="input-div-with-helper-text mr-5 text-red-600 text-sm">※必須</div>
            </div>
          </div>
          <div className="md:w-full">
            <input
              name="entry.548612249"
              type="text"
              placeholder="example@linkcrew.net"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex mb-20">
          <div className="md:w-1/3">
            <div className="div">
              お問い合わせ項目
              <div className="input-div-with-helper-text mr-5 text-red-600 text-sm">※必須</div>
            </div>
          </div>
          <div className="md:w-full">
            <div className="md:flex">
              <input
                name="entry.1501464539"
                type="checkbox"
                value="教育事業"
                className="mr-5"
              />
              教育事業
            </div>
            <div className="md:flex">
              <input
                name="entry.1501464539"
                type="checkbox"
                value="開発事業"
                className="mr-5"
              />
              開発事業
            </div>
            <div className="md:flex">
              <input
                name="entry.1501464539"
                type="checkbox"
                value="キャリア支援事業"
                className="mr-5"
              />
              キャリア支援事業
              </div>
            <div className="md:flex">
              <input
                name="entry.1501464539"
                type="checkbox"
                value="個人情報に関するもの"
                className="mr-5"
              />
              個人情報に関するもの
            </div>
            <div className="md:flex">
              <input
                name="entry.1501464539"
                type="checkbox"
                value="その他"
                className="mr-5"
              />
              その他
            </div>
          </div>
        </div>
        <div className="md:flex mb-20">
          <div className="md:w-1/3">
            <div className="div">
              お問い合わせ内容
              <div className="input-div-with-helper-text mr-5 text-red-600 text-sm">※必須</div>
            </div>
          </div>
          <div className="md:w-full">
            <textarea
              name="entry.1603705982"
              className="input input-bordered w-full h-fit"
              rows="5"
            />
          </div>
        </div>
        <div className="mb-20">
          <button 
            type="submit"
            className="btn btn-primary"
          >
            送信
          </button>
        </div>
      </form>
      <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          style={{display: 'none'}}
          src="about:blank"
      ></iframe>
    </div>
  )
}
