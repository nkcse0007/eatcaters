import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    GET_USER = 'api/user/getUsersByRole?role=';
    USER = 'api/user/';
    UPLOAD = 'upload/';

    constructor(private http: HttpClient) {
    }

    getUsers(role) {
        return this.http.get<any>(environment.BASE_URL + this.GET_USER + role);
    }

    deleteUser(data) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: data
        };

        return this.http.delete<any>(environment.BASE_URL + this.USER, options);
    }

    uploadDocument(data) {
        return this.http.post<any>(environment.BASE_URL + this.UPLOAD, data);
    }

    updateUser(data, userId) {
        return this.http.put<any>(environment.BASE_URL + this.USER + '?userId=' + userId, data);
    }

}
