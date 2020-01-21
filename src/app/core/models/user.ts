export class User {
  'id': number;
  'name': string;
  'email': string;
  'role': string;
  //'password': string;

  constructor(data?: any) {
    Object.assign(this, data);
  }
}
