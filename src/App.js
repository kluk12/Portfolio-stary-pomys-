import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./components/Index";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Index} />

            {/* <Route path="/product" component={Product_list} />
              <Route path="/test" component={rightpanel} /> */}
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
