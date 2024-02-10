import { LinkCrewDiv } from "common";
import Link from "next/link";

export default function News() {
  return (
    <div className="flex flex-col gap-y-8">
      <LinkCrewDiv title="お知らせ" />
      <div className="carousel carousel-center">
        <div className="carousel-item">
          <Link href="https://translucent-maiasaura-850.notion.site/1438e90b862a4bea899b8cc0efff1788?v=e9018a54a66d46b5855df43678fc57f7">
            <div className="flex flex-col gap-y-3">
              <img src="/notion_logo.png" />
              <div>メンバー一覧</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}