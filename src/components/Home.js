import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "../pages/Post";
import User from "../pages/User";
import UserList from "../pages/UserList";

const Home = () => {
  return (
    <Router>
      <Switch>
        {/* All the route components have been kept in the pages folder,
         which makes it easier to locate them
         and also to distinguish them from the other reuseable components */}
        <Route exact path="/" component={UserList} />
        <Route path="/user/:userId" component={User} />
        <Route path="/post/:postId" component={Post} />
      </Switch>
    </Router>
  );
};

export default Home;
