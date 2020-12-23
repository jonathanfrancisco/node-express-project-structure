interface TodosService {
  addTodo(todo: string): Promise<unknown>;
}

export default TodosService;
