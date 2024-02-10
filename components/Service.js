import { LinkCrewH2 } from "common"
import ServiceComponent from "./ServiceComponent"

export default function Service() {
  return <div className="flex flex-col gap-y-5 text-center">
    <LinkCrewH2 title="サービス" className="mb-10"/>
    <ServiceComponent />
  </div>
}