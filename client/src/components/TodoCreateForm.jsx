import React, { Component } from "react";
import {
    InputBase,
    FormControl,
    Card,
    CardContent,
    CardActions,
    Button
} from "@material-ui/core";
import { fade, withStyles } from "@material-ui/core/styles";

const BootstrapInput = withStyles(theme => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.common.white,
        border: "1px solid #ced4da",
        fontSize: 16,
        width: "100%",
        padding: "10px 12px",
        marginBottom: 10,
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main
        }
    }
}))(InputBase);

export class TodoCreateForm extends Component {
    onInputChange = event => {
        console.log(event.value);
    };

    render() {
        return (
            <Card className="todo--form">
                <form onSubmit={e => this.props.onSubmit}>
                    <CardContent>
                        <FormControl className="todo--form-input">
                            <BootstrapInput
                                onChange={e => this.onInputChange(e)}
                                placeholder="Title"
                                id="bootstrap-input"
                            />
                        </FormControl>
                        <FormControl className="todo--form-input">
                            <BootstrapInput
                                onChange={e => this.onInputChange(e)}
                                placeholder="Description"
                                id="bootstrap-input"
                            />
                        </FormControl>
                    </CardContent>
                    <CardActions
                        style={{
                            padding: 14,
                            justifyContent: "flex-end"
                        }}
                    >
                        <Button type="submit" className="todo--form-button">
                            Save
                        </Button>
                    </CardActions>
                </form>
            </Card>
        );
    }
}

export default TodoCreateForm;
