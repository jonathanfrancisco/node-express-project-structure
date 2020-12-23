import TodosService from './interfaces/TodosService';
import Todo from './Todo';

class TodosServiceImpl implements TodosService {
  public async addTodo(todo: string) {
    return {
      data: await Todo.query().insert({
        body: todo
      }),
      message: 'Added successfully'
    };
  }
}

export default TodosServiceImpl;
