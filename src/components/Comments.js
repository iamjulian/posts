import { Typography, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  mail: {
    marginBottom: 12,
  },
});

const Comments = ({ comment }) => {
  const classes = useStyles();
  return (
    <Card style={{ textAlign: "start", marginLeft: "250px" }}>
      <CardContent>
        <Typography className={classes.mail} color="textSecondary">
          {comment.email}
        </Typography>
        <Typography variant="h5" component="h2">
          {comment.name}
        </Typography>
        <Typography variant="body2" component="p">
          {comment.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comments;
