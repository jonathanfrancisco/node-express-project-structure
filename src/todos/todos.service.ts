import Todo from './Todo';

export interface TodosService {
  addTodo(todo: string): Promise<unknown>;
}

export class TodosServiceImpl implements TodosService {
  public async addTodo(todo: string) {
    return {
      data: await Todo.query().insert({
        body: todo
      }),
      message: 'Added successfully'
    };
  }
}
