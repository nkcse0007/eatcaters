import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {CommonService} from './common.service';

// console.log(environment,"environment")
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    LOGIN_URL = 'admin/adminlogin';
    currentUser: any;
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    private currentUserSubject;

    constructor(private http: HttpClient, private commonSrvc: CommonService) {
        this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    updateUserValue(data) {

        const elem = localStorage.getItem('currentUser');
        localStorage.setItem('currentUser', elem);
        this.currentUserSubject.next(elem);
    }

    isLogin(): boolean {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    }

    login(body) {

        return this.http.post<any>(environment.BASE_URL + this.LOGIN_URL, body)
            .pipe(map(user => {
                if (user && user.status && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user.token);
                }
                console.log(user, 'user');
                this.commonSrvc.Toast.fire(user.message, '', 'error');
                return user;

            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    getProfile() {
        return this.http.get(environment.BASE_URL + 'admin/profile');
    }

    updateProfile(data) {
        return this.http.post(environment.BASE_URL + 'admin/updateprofile', data);
    }
}
