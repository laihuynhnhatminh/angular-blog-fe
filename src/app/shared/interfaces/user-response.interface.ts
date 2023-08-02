import { IHttpResponse } from './http-response.interface';

export interface UserHttpResponse extends IHttpResponse {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
}
