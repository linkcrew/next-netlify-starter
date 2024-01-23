import { LinkCrewH1 } from "common";
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
      link: "#キャリア支援",
    },
  ];

  return (
    <div className="flex flex-row gap-x-5 mx-auto">
      {items.map((value, index) => (
        <Link key={index} href={"/services" + value.link}>
          <div className="card bg-primary hover:cursor-pointer">
            <div className="card-body text-center p-4 md:p-6 lg:p-8 xl:p-10">
              <LinkCrewH1 title={value.title} className="card-title mx-auto" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}