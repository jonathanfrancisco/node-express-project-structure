import {
  HttpRequest,
  HttpResponse,
  HttpStatusCodes
} from '../../common/types/Http';

import { TodosService } from './todos.service';

export interface TodosController {
  addTodo(request: HttpRequest): Promise<HttpResponse>;
}

export class TodosControllerImpl implements TodosController {
  private todosService: TodosService;

  constructor(todosService: TodosService) {
    this.todosService = todosService;
  }

  public addTodo = async (request: HttpRequest): Promise<HttpResponse> => {
    const todo: string = request.body.todo;

    return {
      statusCode: HttpStatusCodes.OK,
      body: await this.todosService.addTodo(todo)
    };
  };
}
