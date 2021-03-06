import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class TodoNavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            Todo App
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default TodoNavBar;
