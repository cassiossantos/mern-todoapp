import React, { Component } from "react";
import { Card, CardContent } from "@material-ui/core";
import moment from "moment";

export class TodoItem extends Component {
    render() {
        const { title, description, createdAt } = this.props;
        return (
            <Card className="todo--item">
                <CardContent>
                    <div className="todo--item-title">{title}</div>
                    <div className="todo--item-dscription">{description}</div>
                    <div className="todo--item-date">
                        {moment(createdAt).fromNow()}
                    </div>
                </CardContent>
            </Card>
        );
    }
}

export default TodoItem;
