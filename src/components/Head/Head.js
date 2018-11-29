import React, { Component, Fragment } from "react";
import "./Head.scss";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
class Head extends Component {
  render() {
    return (
      <div className="container">
        <div className="text">
          <Typography
            className="tracking-in-expand while"
            variant="h3"
            gutterBottom
          >
            <span className="while"> Front-end Developer</span>
          </Typography>
          <Typography
            className="tracking-in-expand while m"
            variant="h2"
            gutterBottom
          >
            <span className="while"> Szymon Kluk</span>
          </Typography>
          <Button className="btn draw-border mm">
            <span className="while">Czytaj więcej</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default Head;
