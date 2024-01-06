import { LinkCrewH1 } from "common"
import ServiceComponent from "./ServiceComponent"

export default function Service() {
  return <div className="flex flex-col gap-y-5 text-center">
    <LinkCrewH1 title="Service" />
    <ServiceComponent />
  </div>
}