import React, { Component } from "react";
import "./About.scss";
import classNames from "classnames";
import { Grid, withStyles, Avatar, Typography } from "@material-ui/core";
class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="Conteiner">
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
        >
          <Grid item sm={4} md={4}>
            {/* <div className={classes.row}> */}
            {/* <Avatar
                alt="Remy Sharp"
                src="/static/images/remy.jpg"
                className={classes.avatar}
              /> */}
            <Avatar alt="Adelle Charles" src="img_a.png" className="avatar" />
            {/* </div> */}
          </Grid>
          <Grid item sm={8} md={8}>
            <Typography variant="h4">O Mnie</Typography>
            <p className="p">
              lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(About);
const styles = {
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
};
