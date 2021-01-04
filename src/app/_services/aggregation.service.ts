import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AggregationService {

    COUNT = 'aggregation/dashboard-count';
    MEETING = 'aggregation/meeting';
    SPECIALITY = 'aggregation/speciality';
    SUB_SPECIALITY = 'aggregation/subSpeciality';

    constructor(private http: HttpClient) {
    }

    getDashboardCounts() {
        // tslint:disable-next-line: max-line-length
        return this.http.get<any>(`${environment.BASE_URL}${this.COUNT}`);
    }


    getMeeting(search) {

        return this.http.get<any>(`${environment.BASE_URL}${this.MEETING}?status=${search.status}&pagination=${search.pagination}`);
    }

    deleteMeeting(data) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: data
        };

        return this.http.delete<any>(environment.BASE_URL + this.MEETING, options);
    }

    getSpeciality() {
        return this.http.get<any>(environment.BASE_URL + this.SPECIALITY + '?pagination=false');
    }

    addSpeciality(data) {
        return this.http.post<any>(environment.BASE_URL + this.SPECIALITY, data);
    }

    updateSpeciality(data) {
        return this.http.put<any>(environment.BASE_URL + this.SPECIALITY, data);
    }

    deleteSpeciality(data) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: data
        };

        return this.http.delete<any>(environment.BASE_URL + this.SPECIALITY, options);
    }

    getSubSpeciality(specialityId) {
        return this.http.get<any>(environment.BASE_URL + this.SUB_SPECIALITY + '?specialityId=' + specialityId + '&pagination=false');
    }

    addSubSpeciality(data) {
        return this.http.post<any>(environment.BASE_URL + this.SUB_SPECIALITY, data);
    }

    updateSubSpeciality(data) {
        return this.http.put<any>(environment.BASE_URL + this.SUB_SPECIALITY, data);
    }

    deleteSubSpeciality(data) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: data
        };

        return this.http.delete<any>(environment.BASE_URL + this.SUB_SPECIALITY, options);
    }


}
