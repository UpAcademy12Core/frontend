export class User {
  'id'?: number;
  'name': string;
  'email': string;
  'role': string;
  'password': string;
<<<<<<< HEAD
=======
  'validatedEmail': boolean;
>>>>>>> ba062bebcf82073274ccfcf9a9e96855c0cea04f

  constructor(data?: any) {
    Object.assign(this, data);
  }
}
