import { Request, Response } from 'express';
import Todo from './Todo';
import httpErrors from 'http-errors';

export const addTodo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const addTodoRequestDto = req.body;

  const todo = await Todo.query().insert({
    ...addTodoRequestDto,
    isDone: false
  });

  return res.send(201).send({ todo, message: 'Added succesfully' });
};

export const getTodos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const todos = await Todo.query().select('*');

  return res.status(200).send(todos);
};

export const getTodoById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;
  const todo = await Todo.query().findById(id);

  throw new httpErrors.NotFound('Todo not found');

  return res.status(200).send(todo);
};
