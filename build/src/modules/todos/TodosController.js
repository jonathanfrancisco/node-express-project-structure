"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const TodosController = {};
TodosController.addTodo = async (req, res) => {
    const addTodoRequestDto = req.body;
    const todo = await knex_1.default('todos').insert({
        ...addTodoRequestDto,
        createdAt: new Date().toISOString(),
        isDone: false
    });
    return res.send(201).send({ todo, message: 'Added succesfully' });
};
TodosController.getTodos = async (req, res) => {
    const todos = await knex_1.default('todos').select('*');
    return res.status(200).send(todos);
};
TodosController.getTodoById = async (req, res) => {
    const id = req.params.id;
    const todo = await knex_1.default('todos')
        .select('*')
        .where({
        id
    });
    return res.status(200).send(todo);
};
exports.default = TodosController;
