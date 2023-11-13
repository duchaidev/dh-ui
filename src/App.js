// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/styles/global.css";
import Home from "./pages/Home";
import UpdateComponent from "./pages/UpdateComponent";
import ComponentDemo from "./components/shared/ComponentDemo";
import NewComponent from "./pages/NewComponent";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/update" component={UpdateComponent} />
      <Route
        path="/component/demo"
        component={() => (
          <ComponentDemo code={localStorage.getItem("componentCode") || ""} />
        )}
      />
      <Route path="/new" component={NewComponent} />
    </Switch>
  </Router>
);

export default App;
