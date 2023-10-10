import { LinkCrewH1 } from "common";

export default function Message() {
  return (
    <div className="flex flex-col gap-y-5">
      <LinkCrewH1 title="Message" />
      <div className="flex flex-row gap-x-5 w-full">
        <img src="/CEOphoto.jpg" className="basis-1/3" />
        <div className="basis-2/3 my-auto">aaa</div>
      </div>
    </div>
  )
}