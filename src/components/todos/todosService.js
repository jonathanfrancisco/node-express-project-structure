const httpErrors = require('http-errors')
const Todo = require('../../models/Todo')

module.exports = () => {
  const todosService = {}

  todosService.getTodos = async ({ searchQuery }) => {
    const todos = await Todo.query()
    return { todos }
  }

  todosService.createTodo = async ({ body }) => {
    const newTodo = await Todo.query().insert({
      body
    })

    return {
      todo: newTodo
    }
  }

  todosService.getTodoById = async ({ id }) => {
    const todo = await Todo.query().findById(id)
    if (!todo) throw httpErrors.NotFound()

    return {
      todo
    }
  }

  todosService.deleteTodos = async () => {
    const deletedTodos = await Todo.query()
      .delete()
      .returning('*')

    return {
      todos: deletedTodos,
      rowsDeleted: deletedTodos.length
    }
  }

  todosService.deleteTodoById = async ({ id }) => {
    const deletedTodo = await Todo.query()
      .deleteById(id)
      .returning('*')
    if (!deletedTodo) throw httpErrors.NotFound()

    return {
      todo: deletedTodo
    }
  }

  return Object.freeze(todosService)
}
