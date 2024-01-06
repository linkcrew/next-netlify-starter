import { LinkCrewH2 } from "common";
import { services } from "commonConst";
import Link from "next/link";

const { education, inHouseDev, careerSupport } = services;

export default function ServiceComponent() {
  const items = [
    {
      title: inHouseDev,
      link: "#開発",
    },
    {
      title: education,
      link: "#教育",
    },
    {
      title: careerSupport,
      link: "#支援",
    },
  ];

  return (
    <div className="flex flex-row gap-x-5 mx-auto">
      {items.map((value, index) => (
        <Link key={index} href={"/Service" + value.link}>
          <div className="c-btn grad bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 rounded-md">
            <div className="card-body text-center">
              <LinkCrewH2 title={value.title} className="card-title mx-auto" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
