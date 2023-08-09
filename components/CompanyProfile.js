// import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

// export default function CompanyProfile({ name, tel, address }) {
export default function CompanyProfile({ title, content }) {
  return (
    <div className="flex flex-col w-[40vw] mb-[20px] md:flex-row profile_border">
      <div className="rounded-[0px] w-full md:w-3/6">
        <Typography
          component="div"
          align="center"
          // className="h-full flex items-center justify-center text-2xl text-white"
          className="h-full flex items-center justify-center text-sm text-base-gray profile_text_center"
        >
          {title}
        </Typography>
      </div>
      {/* <Card className="rounded-[0px] bg-base-green w-4/5"> */}
      <div className="rounded-[0px] w-full background-: md:w-3/6">
        <Typography
          component="div"
          className="text-sm p-4 text-base-gray profile_text_center">
          {content}
        </Typography>
      </div>
    </div>
  );
}
