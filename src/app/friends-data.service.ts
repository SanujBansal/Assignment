import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { friendsI } from './friendsProto';
@Injectable({
  providedIn: 'root'
})
export class FriendsDataService {
  getFriends()
  {
    return this.http.get<friendsI[]>('./assets/friends.json');
  }
  constructor(private http: HttpClient) { }
}
