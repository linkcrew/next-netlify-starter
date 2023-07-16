import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function Business({ title, content }) {
  return (
    <div className="flex w-[60vw] mb-[20px]">
      <Card className="rounded-[10px] bg-base-green w-1/5">
        <Typography
          component="div"
          className="h-full flex items-center justify-center text-2xl text-white"
        >
          {title}
        </Typography>
      </Card>
      <Card className="bg-card-detail-green w-4/5">
        <Typography component="div" className="text-sm p-4">
          {content}
        </Typography>
      </Card>
    </div>
  );
}
