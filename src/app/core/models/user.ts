export class User {
  'id'?: number;
  'name': string;
  'email': string;
  'role': string;
  'password': string;
  'validatedEmail': boolean;

  constructor(data?: any) {
    Object.assign(this, data);
  }
}
