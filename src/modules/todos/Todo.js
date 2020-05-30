const { Model } = require('objection');
const uuidv4 = require('uuid/v4');

class Todo extends Model {
  static get tableName() {
    return 'todos';
  }

  static get idColumn() {
    return 'id';
  }

  async $beforeInsert() {
    this.id = uuidv4();
    this.isDone = false;
    this.createdAt = new Date().toISOString();
  }

  async $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = Todo;
