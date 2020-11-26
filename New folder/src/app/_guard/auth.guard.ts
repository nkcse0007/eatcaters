import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,  CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../_services/auth.service';
@Injectable({
  providedIn: 'root'
}) 
export class AuthGuard implements CanActivate {

constructor(private router:Router ,private auth:AuthService){

}
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
  const currentUser = this.auth.currentUserValue;
  if (currentUser) {
      // check if route is restricted by role
      if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
         
          this.router.navigate(['/']);
          return false;
      }

      // authorised so return true
      return true;
  }

  // not logged in so redirect to login page with the return url
  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
}
}
