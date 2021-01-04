import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    PAYMENT = 'payment/payment';

    constructor(private http: HttpClient) {
    }

    getPayments(search) {
        // tslint:disable-next-line: max-line-length
        return this.http.get<any>(`${environment.BASE_URL}${this.PAYMENT}?&pagination=${search.pagination}&page=${search.pageNumber}&limit=${search.noOfRecord}`);
    }

}
