// import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function Business({ title, content }) {
  return (
    <div className="flex flex-col w-[60vw] mb-[20px] md:flex-row">
      <div className="rounded-[0px] bg-card-detail-green w-full md:w-1/5">
        <Typography
          component="div"
          align="center"
          // className="h-full flex items-center justify-center text-2xl text-white"
          className="h-full flex items-center justify-center text-2xl text-base-gray"
        >
          {title}
        </Typography>
      </div>
      {/* <Card className="rounded-[0px] bg-base-green w-4/5"> */}
      <div className="rounded-[0px] w-full background-: md:w-4/5">
        <Typography component="div" className="text-sm p-4 text-base-gray">
          {content}
        </Typography>
      </div>
    </div>
  );
}
