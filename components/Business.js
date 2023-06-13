import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function Business({ title, content }) {
  return (
    <div className="content">
      <Card className="cardtitle">
        <Typography component="div" className="cardtitle-content">
          {title}
        </Typography>
      </Card>
      <Card className="carddetail">
        <Typography component="div" className="carddetail-content">
          {content}
        </Typography>
      </Card>
    </div>
  )
}
