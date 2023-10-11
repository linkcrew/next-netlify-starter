import { LinkCrewDiv } from "common";
import UsersVoiceComponent from "./UsersVoiceComponent";

export default function UsersVoice() {
  return (
    <div className="flex flex-col gap-y-5">
      <LinkCrewDiv title="利用者の声" className="text-left" />
      <UsersVoiceComponent />
    </div>
  );
}