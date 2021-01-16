import {
  HttpRequest,
  HttpResponse,
  HttpStatusCodes
} from '../../common/types/Http';

import TodosService from './todos.service';

export default class TodosController {
  private todosService: TodosService;

  constructor() {
    this.todosService = new TodosService();
  }

  public addTodo = async (request: HttpRequest): Promise<HttpResponse> => {
    const todo: string = request.body.todo;

    return {
      statusCode: HttpStatusCodes.OK,
      body: await this.todosService.addTodo(todo)
    };
  };
}
