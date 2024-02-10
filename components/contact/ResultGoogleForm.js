export default function ResultGoogleForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="items-center justify-center flex flex-col gap-y-10"
    >
      <p>
        送信が完了しました。
      </p>
      <button type="button" className="btn btn-primary " onClick={() => window.location.href = '/contact'}>
        戻る
      </button>
    </form>
  )
}