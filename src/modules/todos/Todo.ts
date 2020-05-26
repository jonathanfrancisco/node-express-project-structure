import { Model } from 'objection';

export default class Person extends Model {
  // Table name is the only required property.
  static tableName = 'todos';
}
