import { LinkCrewH2 } from "common";
import Link from "next/link";

export default function ServiceComponent() {
  const items = [
    {
      title: "開発",
      link: "#開発",
    },
    {
      title: "教育",
      link: "#教育",
    },
    {
      title: "支援",
      link: "#支援",
    },
  ];

  return (
    <div className="flex flex-row gap-x-5 mx-auto">
      {items.map((value, index) => (
        <Link key={index} href={"/Service" + value.link}>
          <div className="card bg-primary hover:cursor-pointer">
            <div className="card-body text-center">
              <LinkCrewH2 title={value.title} className="card-title mx-auto" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}