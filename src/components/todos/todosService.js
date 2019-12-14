const todosService = {}

todosService.getTodos = async ({ searchQuery }) => {
  const todos = [
    {
      body: 'Hello World',
      isDone: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      body: 'Hello World',
      isDone: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      body: 'Hello World',
      isDone: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      body: 'Hello World',
      isDone: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]
  return todos
}

module.exports = Object.freeze(todosService)
