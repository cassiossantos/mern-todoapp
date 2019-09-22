import React, { Component } from "react";
import api from "../service/index";
import { Grid } from "@material-ui/core";
import TodoNavBar from "../components/TodoNavBar";
import TodoCreateForm from "../components/TodoCreateForm";
import TodoListLoader from "../components/TodoListLoader";
import TodoItem from "../components/TodoItem";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            hasError: false,
            todos: []
        };
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        this.setState({
            isLoading: true
        });
        api.getTodo().then(response => {
            if (response.status === 200) {
                const todos = response.data.data;
                this.setState({
                    todos,
                    isLoading: false
                });
            }
        });
    };

    onSubmit = (event, data) => {
        event.preventDefault();
        console.log(data);
    };

    createTodo = data => {
        api.createTodo(data).then(response => {
            console.log(response);
        });
    };

    renderContent = () => {
        const { hasError, isLoading, todos } = this.state;
        if (hasError) {
            return <div>Ops! Something goes wrong!</div>;
        }

        if (isLoading) {
            return (
                <div>
                    <TodoListLoader></TodoListLoader>
                    <TodoListLoader></TodoListLoader>
                    <TodoListLoader></TodoListLoader>
                </div>
            );
        }

        return (
            <div>
                {todos.map(todo => (
                    <TodoItem key={todo._id} {...todo}></TodoItem>
                ))}
            </div>
        );
    };

    render() {
        return (
            <React.Fragment>
                <TodoNavBar></TodoNavBar>
                <Grid className="todo--container" container justify="center">
                    <Grid item xs={12} sm={8} md={8} lg={6}>
                        <TodoCreateForm
                            onSubmit={this.onSubmit}
                        ></TodoCreateForm>
                        {this.renderContent()}
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default App;
