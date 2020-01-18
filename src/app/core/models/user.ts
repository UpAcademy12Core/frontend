export class User {
  'id': number;
  'username': string;
  'email': string;
  'role': string;
  //'password': string;

  constructor(data?: any) {
    Object.assign(this, data);
  }
}
