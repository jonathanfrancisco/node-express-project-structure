"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const TodosController_1 = __importDefault(require("./TodosController"));
const TodosRouter = express_1.Router();
const validator = {
    '/todos': celebrate_1.celebrate({
        [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
            body: celebrate_1.Joi.string()
                .min(4)
                .max(100)
                .required()
        })
    }, { abortEarly: false })
};
TodosRouter.post('/todos', TodosController_1.default.addTodo);
TodosRouter.get('/todos/:id', TodosController_1.default.getTodoById);
TodosRouter.get('/todos', TodosController_1.default.getTodos);
TodosRouter.use(celebrate_1.errors()); // catch joi/celebrate validation errors
exports.default = TodosRouter;
