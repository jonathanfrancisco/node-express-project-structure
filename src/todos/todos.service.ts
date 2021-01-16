import Todo from './Todo';

export default class TodosService {
  public async addTodo(todo: string) {
    return {
      data: await Todo.query().insert({
        body: todo
      }),
      message: 'Added successfully'
    };
  }
}
