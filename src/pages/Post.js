import useFetchData from "../hooks/useFetchData";
import { useHistory, useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import Comments from "../components/Comments";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },

  backBtn: {
    marginRight: theme.spacing(3),
    color: "white",
  },
}));

const Post = () => {
  const classes = useStyles();
  const { postId } = useParams();

  // useFetchData as a custom hook makes it easier to pass on any api url
  // and collect the data on the prefered components.
  // This custom hook can be called as many times as prefered.
  const {
    data: comments,
    isLoading,
    error,
  } = useFetchData("https://jsonplaceholder.typicode.com/comments/");
  const { data: post } = useFetchData(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            className={classes.backBtn}
            onClick={() => history.goBack()}
          >
            <ArrowBackIos />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Posts
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {isLoading && (
          <div>
            <LinearProgress />
          </div>
        )}
        {error && <div>{error}</div>}
        {comments && (
          <div>
            {post && (
              <Card style={{ marginTop: "20px" }}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {post.body}
                  </Typography>
                </CardContent>
              </Card>
            )}
            <Typography variant="h4" style={{ padding: "20px" }}>
              Comments:
            </Typography>
            {comments.map((comment) =>
              comment.postId == postId ? (
                <div key={comment.id} style={{ margin: "30px" }}>
                  <Comments comment={comment} />
                </div>
              ) : null
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Post;
