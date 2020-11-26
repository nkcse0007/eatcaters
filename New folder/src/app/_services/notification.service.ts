import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  NOTIFICATION = 'notification/';

  constructor(private http: HttpClient) { }

  getNotification(search) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(`${environment.BASE_URL}${this.NOTIFICATION}pushNotification?&pagination=${search.pagination}`);
  }

}
