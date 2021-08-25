import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '@module-federation-ionic/shared/data-access/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private userService: UserService){}
   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      if(this.userService.checkAuthorization()){
        return true;
      }else {
        window.location.href="https://poc-nx-ionic-module-federation-hosted-ui-auth.auth.eu-west-1.amazoncognito.com/login?client_id=35lnq2f23895ihrnnj6kof4058&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile+serverlessbackend.com/transfers.read&redirect_uri=https://master.d275v0hfacbx1p.amplifyapp.com/"
        return false;
      }
  }
  
}
