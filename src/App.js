import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Individual_Projects from "./pages/Individual_Projects";
import "./styles/sass/main.css";
function App() {

  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/projects" exact render={() => <Projects />} />
      <Route path="/Individual_Projects/:name" exact render={() => <Individual_Projects />} />
    </Switch>
  );
}

export default App;
