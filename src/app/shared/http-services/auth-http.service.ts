import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageKeyEnum } from '../enums/local-storage-key.enum';
import {
  IUserHttpResponse,
  UserLogin,
  UserRegistration,
} from '../interfaces/user.interface';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class AuthHttpService {
  private resource = environment.apiHost;

  constructor(private readonly httpService: HttpService) {}

  public login(user: UserLogin): Observable<IUserHttpResponse> {
    return this.httpService
      .post<IUserHttpResponse>(`${this.resource}/auth/login`, user)
      .pipe(
        tap((res: IUserHttpResponse) => {
          localStorage.setItem(
            LocalStorageKeyEnum.TOKEN,
            res.token.accessToken,
          );
        }),
      );
  }

  public register(user: UserRegistration): Observable<IUserHttpResponse> {
    return this.httpService
      .post<IUserHttpResponse>(`${this.resource}/auth/register`, user)
      .pipe(
        tap((res: IUserHttpResponse) => {
          localStorage.setItem(
            LocalStorageKeyEnum.TOKEN,
            res.token.accessToken,
          );
        }),
      );
  }
}
