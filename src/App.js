import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import IndividualProjects from "./pages/IndividualProjects";
import "./styles/sass/main.css";
function App() {

  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/projects" exact render={() => <Projects />} />
      <Route path="/Individual_Projects/:name" exact render={() => <IndividualProjects />} />
    </Switch>
  );
}

export default App;
