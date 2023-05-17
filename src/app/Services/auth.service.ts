import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user:any)
  {
    let users=[];
    if(localStorage.getItem('Users'))
    {
      users=JSON.parse(localStorage.getItem('Users') as string)
    }
    return users.find((p: { email: any; password: any; })=> p.email===user.Email&&p.password===user.Password)

  }
}
