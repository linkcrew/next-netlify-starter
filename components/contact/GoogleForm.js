import { useRouter } from 'next/router'

export default function ContactGoogleForm() {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = document.getElementById('form');
    const inputElms = form.querySelectorAll('input');
    
    form.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        inputElms.forEach((input) => {
          const label = input.closest('label');
          label.classList.remove('is-error');
          const errorMessage = label.nextElementSibling;
          errorMessage.textContent = '';
        });
        const isValid = form.checkValidity();
        if (isValid) {
          alert('submit!');
        }
      },
      { passive: false }
    );
    inputElms.forEach((input) => {
      input.addEventListener('invalid', (e) => {
        const currentTarget = e.currentTarget;
        const label = currentTarget.closest('label');
        label.classList.add('is-error');
        const errorMessage = label.nextElementSibling;
        errorMessage.textContent = currentTarget.validationMessage;
      });
    }); 

    e.target.submit();
    router.push('/contact_thanks')
  }

  return (
    <div className="w-full mt-10">
      <form 
        id='form'
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdrjcNaG7TGt6A_5IAadRql_tI1nsnukF9GYcKInZTjFwjG9Q/formResponse?embedded=true"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
      >
        <div className="mb-20">
          <label className='md:flex'>
            <span className="w-full">
              氏名
              <div className="input-div-with-helper-text mr-5 text-red-600 text-sm">※必須</div>
            </span>
            <input 
            name="entry.1780721743"
            type="text" 
            id="input" 
            placeholder="山田太郎"
            className="input input-bordered w-full"
            required />
          </label>
          <span class="errorMessage"></span>
        </div>
        <div className="mb-20">
          <label className='md:flex'>
            <span className="w-full">会社名（任意）</span>
            <input
              name="entry.1033311784"
              type="text"
              placeholder="LiNKCREW株式会社"
              className="input input-bordered w-full"
              id="input" />
          </label>
        </div>
        <div className="mb-20">
          <label className='md:flex'>
            <span className="w-full">
              メールアドレス
              <div className="input-div-with-helper-text mr-5 text-red-600 text-sm">※必須</div>
            </span>
            <input
              name="entry.548612249"
              type="text"
              placeholder="example@linkcrew.net"
              className="input input-bordered w-full"
              id="input" 
              required />
          </label>
          <span class="errorMessage"></span>
        </div>
        <div className="mb-20">
          <label className='md:flex'>
            <span className="w-full">
              お問い合わせ項目
              <div className="input-div-with-helper-text mr-5 text-red-600 text-sm">※必須</div>
            </span>
            <div className="md:w-full">
            <div>
              <input
                name="entry.1501464539"
                type="checkbox"
                value="教育事業"
                className="mr-5"
              />
              教育事業
            </div>
            <div>
              <input
                name="entry.1501464539"
                type="checkbox"
                value="開発事業"
                className="mr-5"
              />
              開発事業
            </div>
            <div>
              <input
                name="entry.1501464539"
                type="checkbox"
                value="キャリア支援事業"
                className="mr-5"
              />
              キャリア支援事業
              </div>
            <div>
              <input
                name="entry.1501464539"
                type="checkbox"
                value="個人情報に関するもの"
                className="mr-5"
              />
              個人情報に関するもの
            </div>
            <div>
              <input
                name="entry.1501464539"
                type="checkbox"
                value="その他"
                className="mr-5"
              />
              その他
            </div>
          </div> 
          </label>
          <span class="errorMessage"></span>
        </div>
        <div className="mb-20">
          <label className='md:flex'>
            <span className="w-full">
              お問い合わせ内容
              <div className="input-div-with-helper-text mr-5 text-red-600 text-sm">※必須</div>
            </span>
            <textarea
              name="entry.1603705982"
              className="input input-bordered w-full h-fit"
              rows="5"
              type="text" id="input" required
            />
          </label>
          <span class="errorMessage"></span>
        </div>
        <div className="mb-20 text-center">
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
