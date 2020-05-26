import { Model } from 'objection';

export default class Todo extends Model {
  // Table name is the only required property.
  static tableName = 'todos';
}
