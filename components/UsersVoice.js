import { LinkCrewH2 } from "common";
import UsersVoiceComponent from "./UsersVoiceComponent";

export default function UsersVoice() {
  return (
    <div className="flex flex-col gap-y-10">
      <LinkCrewH2 title="利用者の声" className="text-center" />
      <UsersVoiceComponent />
    </div>
  );
}