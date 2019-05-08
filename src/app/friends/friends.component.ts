import { Component, OnInit } from '@angular/core';
import { FriendsDataService } from '../friends-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  public friends= [];
  constructor(private friendsService: FriendsDataService) { }
  ngOnInit() {
    this.friendsService.getFriends().subscribe(friends => this.friends=friends);
  }

}
