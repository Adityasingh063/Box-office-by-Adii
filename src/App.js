import React from "react";
import { Switch, Route } from "react-router-dom"

function App() {
  return <Switch >

    <Route exact path="/">
      This is Home Page
    </Route>
    <Route exact path="/starred">
      This is Starred
    </Route>
    <Route >
     <h1> Error 404 page not found</h1>
    </Route>

  </Switch>;

}

export default App;
