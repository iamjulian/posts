import useFetchData from "../hooks/useFetchData";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Container from "@material-ui/core/Container";
import { Card, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const UserList = () => {
  const classes = useStyles();

  // useFetchData as a custom hook makes it easier to pass on any api url
  // and collect the data on the prefered components.
  // This custom hook can be called as many times as prefered.
  const {
    data: users,
    isLoading,
    error,
  } = useFetchData("https://jsonplaceholder.typicode.com/users");

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5">Posts</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {isLoading && (
          <div>
            <LinearProgress />
          </div>
        )}
        {error && <div>{error}</div>}
        {users &&
          users.map((user) => (
            <div key={user.id}>
              <Link to={`/user/${user.id}`} style={{ textDecoration: "none" }}>
                <Card style={{ margin: "50px 200px 50px 200px" }} elevation={7}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      {user.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
      </Container>
    </div>
  );
};

export default UserList;
