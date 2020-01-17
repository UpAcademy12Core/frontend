export class User {
  'id': number;
  'name': string;
  'email': string;
  'role': string;  // rever
  

  constructor(data?: any) {
    Object.assign(this, data);
  }
}
