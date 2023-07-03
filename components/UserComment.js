import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function UserComment({ img, content, name }) {
  return (
    <div className="content-user-comment">
        <Typography component="div" className="carddetail-user-comment">
          <img src={img} />
        </Typography>
        <Typography component="div" className="carddetail-user-comment">
          {content}
        </Typography>
        <Typography component="div" className="carddetail-user-comment carddetail-user-comment-name">
          {name}
        </Typography>
    </div>
  )
}
