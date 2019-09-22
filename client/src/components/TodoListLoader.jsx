import React, { Component } from "react";
import { Card, CardContent } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

export class TodoListLoader extends Component {
    render() {
        return (
            <Card className="todo--item">
                <CardContent>
                    <div className="todo--item-title">
                        <Skeleton
                            variant="rect"
                            height={11}
                            width={"40%"}
                        ></Skeleton>
                    </div>
                    <div className="todo--item-dscription">
                        <Skeleton
                            variant="rect"
                            height={10}
                            width={"80%"}
                        ></Skeleton>
                    </div>
                    <div className="todo--item-date">
                        <Skeleton
                            variant="rect"
                            height={6}
                            width={"20%"}
                        ></Skeleton>
                    </div>
                </CardContent>
            </Card>
        );
    }
}

export default TodoListLoader;
