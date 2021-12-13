import React from "react";
import { Grid, Paper, Tooltip } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { withStyles } from "@material-ui/core";

import { ACTIVITIES } from "../constants";

const StyledToggleButton = withStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
}))(ToggleButton);

const ActivityMenu = (props) => {
  return (
    <Grid
      container
      justify={props.pluginPosition === "right" ? "flex-end" : "flex-start"}
    >
      <Paper style={{ maxWidth: 64 }}>
        {ACTIVITIES.map((activity, index) => {
          return (
            <div key={index} style={{ padding: 8 }}>
              <Tooltip title={activity.tooltip}>
                <StyledToggleButton
                  value={activity.id}
                  selected={props.activity === activity.id}
                  onChange={() => {
                    props.setActivity(activity.id);
                  }}
                >
                  {activity.icon}
                </StyledToggleButton>
              </Tooltip>
            </div>
          );
        })}
      </Paper>
    </Grid>
  );
};
export default ActivityMenu;
