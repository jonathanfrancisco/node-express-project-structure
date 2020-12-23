import { HttpRequest, HttpResponse } from '../../../common/types/Http';

interface TodosController {
  addTodo(request: HttpRequest): Promise<HttpResponse>;
}

export default TodosController;
