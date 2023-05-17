import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

addUser(user:User){
  let users: User[];
  if(localStorage.getItem('Users'))
  {
   users = JSON.parse(localStorage.getItem('Users') as string)
   users= [...users, user]
  }else{
   users=[user];
  }
   localStorage.setItem('Users',JSON.stringify(users));
   console.log(users);
 }

}
