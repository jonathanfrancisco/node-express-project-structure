import { Request, Response } from 'express';
import Todo from './Todo';

const addTodo = async (req: Request, res: Response): Promise<Response> => {
  const addTodoRequestDto = req.body as { body: string };
  const todo = await Todo.query().insert(addTodoRequestDto);

  return res.status(201).send({ todo, message: 'Added succesfully' });
};

const getTodos = async (req: Request, res: Response): Promise<Response> => {
  const todos = await Todo.query().select('*');

  return res.status(200).send(todos);
};

const getTodoById = async (req: Request, res: Response): Promise<Response> => {
  const id: string = req.params.id;

  const todo = await Todo.query().findById(id);
  if (!todo) {
    return res.status(404).send({
      message: 'Todo not found'
    });
  }

  return res.status(200).send(todo);
};

export { addTodo, getTodos, getTodoById };
