import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  PLAN = 'payment/plan';

  constructor(private http: HttpClient) { }

  getPlans(search) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(`${environment.BASE_URL}${this.PLAN}?&pagination=${search.pagination}&page=${search.pageNumber}&limit=${search.noOfRecord}&search=${search.search}`);
  }

  getPlan(role) {
    return this.http.get<any>(environment.BASE_URL + this.PLAN + role);
  }

  updatePlan(data) {
    return this.http.put<any>(environment.BASE_URL + this.PLAN, data);
  }

  addPlan(data) {
    return this.http.post<any>(environment.BASE_URL + this.PLAN, data);
  }

  deletePlans(data) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: data
    };

    return this.http.delete<any>(environment.BASE_URL + this.PLAN, options);
  }

}

