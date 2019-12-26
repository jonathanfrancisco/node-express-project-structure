const uuidv4 = require('uuid/v4')
const BaseModel = require('./BaseModel')

class Todo extends BaseModel {
  static get tableName() {
    return 'todos'
  }

  static get idColumn() {
    return 'id'
  }

  async $beforeInsert() {
    this.id = uuidv4()
    this.createdAt = new Date().toISOString()
  }

  async $beforeUpdate() {
    this.updatedAt = new Date().toISOString()
  }
}

module.exports = Todo
