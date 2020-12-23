import { Model } from 'objection';
import { v4 as uuid } from 'uuid';

export default class Todo extends Model {
  static tableName = 'todos';

  id!: string;
  body!: string;
  isDone!: boolean;
  createdAt!: string;
  updatedAt!: string;

  async $beforeInsert() {
    this.id = uuid();
    this.isDone = false;
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  async $afterUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}
