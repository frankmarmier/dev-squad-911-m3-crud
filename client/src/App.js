import { Switch, Route } from "react-router-dom";
import NavMain from "./Components/NavMain";
import Home from "./views/Home";
import FormBurger from "./views/FromBurger";
import Dashboard from "./views/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/burger-form/create" component={FormBurger} />
      </Switch>
    </div>
  );
}

export default App;
