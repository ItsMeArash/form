import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect from="/" to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
