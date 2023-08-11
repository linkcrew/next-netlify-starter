// import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

// export default function CompanyProfile({ name, tel, address }) {
export default function CompanyProfile({ title, content, end }) {
  return (
    // <div className="flex flex-col w-[40vw] md:flex-row profile_border">
    <div className={end ? "flex flex-col w-[60vw] mb-[40px] md:flex-row md:w-[40vw] profile_border profile_border_bottom" : "flex flex-col w-[60vw] md:flex-row md:w-[40vw] profile_border"}>
      <div className="rounded-[0px] w-full md:w-3/6">
        <Typography
          component="div"
          align="center"
          className="h-full flex items-center justify-center text-sm text-base-gray profile_text_center bg-card-detail-green"
        >
          {title}
        </Typography>
      </div>
      <div className="rounded-[0px] w-full background-:">
        <Typography
          component="div"
          className="text-sm p-4 text-base-gray profile_text_center">
          {content}
        </Typography>
      </div>
    </div>
  );
}
