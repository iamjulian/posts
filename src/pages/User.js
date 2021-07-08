import useFetchData from "../hooks/useFetchData";
import { Link, useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import PostList from "../components/PostList";

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

const User = () => {
  const classes = useStyles();
  const { userId } = useParams();
  const history = useHistory();

  // useFetchData as a custom hook makes it easier to pass on any api url
  // and collect the data on the prefered components.
  // This custom hook can be called as many times as prefered.
  const {
    data: posts,
    isLoading,
    error,
  } = useFetchData("https://jsonplaceholder.typicode.com/posts/");
  const { data: user } = useFetchData(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
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
          {user && <Typography variant="h5">{user.name}</Typography>}
        </Toolbar>
      </AppBar>
      <Container>
        {isLoading && (
          <div>
            <LinearProgress />
          </div>
        )}
        {error && <div>{error}</div>}
        {posts &&
          posts.map((post) =>
            post.userId == userId ? (
              <div key={post.id}>
                <Link
                  to={`/post/${post.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <PostList post={post} />
                </Link>
              </div>
            ) : null
          )}
      </Container>
    </div>
  );
};

export default User;
