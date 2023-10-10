import { LinkCrewH1 } from "common";

export default function Career() {
  const items = [
    {
      content: "aaa",
      className: "step-primary",
    },
    {
      content: "aaa",
      className: "step-primary",
    },
    {
      content: "aaa",
      className: "step-primary",
    },
    {
      content: "aaa",
      className: "step-primary",
    },
    {
      content: "Next...",
      className: "",
    },
  ];

  return (
    <div className="flex flex-col gap-y-5">
      <LinkCrewH1 title="Career" />
      <ul className="steps steps-vertical mx-auto">
        {items.map((value, index) => (
          <li key={index} className={"step " + value.className}>{value.content}</li>
        ))}
      </ul>
    </div>
  )
}