const Todo = require("../models/Todo");

getTodos = async (req, res) => {
    await Todo.find({}, (err, todos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!todos.length) {
            return res
                .status(404)
                .json({ success: false, error: `Todos not found` });
        }
        return res.status(200).json({ success: true, data: todos });
    }).sort({
        createdAt: -1
    });
};

createTodo = async (req, res) => {
    const newTodo = new Todo({
        title: req.body.title,
        description: req.body.description
    });
    newTodo
        .save()
        .then(response => {
            return res.status(201).json({
                sucess: true
            });
        })
        .catch(err => {
            return res.status(400).send("error");
        });
};

editTodo = async (req, res) => {
    await Todo.findById(req.params.id, function(err, entity) {
        if (entity) {
            entity.title = req.body.title || entity.title;
            entity.description = req.body.description || entity.description;
            entity
                .save()
                .then(result => {
                    return res.status(201).json({
                        success: true,
                        data: result
                    });
                })
                .catch(err => {
                    return response.status(400).json({
                        error: true,
                        message: err.message
                    });
                });
        } else {
            return res.status(400).json({
                error: true,
                message: "Entity not found"
            });
        }
    }).catch(err => {
        return response.status(400).json({
            error: true,
            message: err.message
        });
    });
};

deleteTodo = async (req, res) => {
    Todo.remove({ _id: req.params.id })
        .exec(function(err, result) {
            if (err) {
                return res.status(400).json({
                    error: true,
                    message: "Not possible to remove this entity"
                });
            }
            return res.status(201).json({
                success: true,
                message: "Deleted"
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: true,
                message: "Not possible to remove this entity"
            });
        });
};

module.exports = {
    getTodos,
    createTodo,
    deleteTodo,
    editTodo
};
