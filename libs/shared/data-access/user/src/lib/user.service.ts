import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { ''}

   checkAuthorization():boolean{
     let s=false;
       Auth.currentAuthenticatedUser().then(user => {
         console.log(" Auth.currentAuthenticatedUser()", user)
        s=true;
       }).catch(e => {
        console.log("Error : ",e);
        s=false;
       });
       return s;
}




}