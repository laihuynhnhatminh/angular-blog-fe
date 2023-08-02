import { JWTToken } from './token.interface';
import { UserHttpResponse } from './user-response.interface';

export interface IUserHttpResponse {
  user: UserHttpResponse;
  token: JWTToken;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegistration {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
