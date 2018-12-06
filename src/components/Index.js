import Head from "./Head/Head";
import React, { Component, Fragment } from "react";
import About from "./About/About";
import SimpleSlider from "./Slider/Slider";
export default class Index extends Component {
  render() {
    return (
      <Fragment>
        <Head />
        <About />
        <SimpleSlider />
      </Fragment>
    );
  }
}
