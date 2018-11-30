import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./components/Index";
import Slider from "./components/Slider/Slider";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/a" component={Slider} />
            {/* <Route path="/product" component={Product_list} />
              <Route path="/test" component={rightpanel} /> */}
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
