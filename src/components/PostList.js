import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Comments = ({ post }) => {
  return (
    <Card style={{ margin: "50px 200px 50px 200px" }} elevation={7}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comments;
