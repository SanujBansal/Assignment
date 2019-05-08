import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter<Event>();
  constructor() { }

  ngOnInit() {
  }
  public toggleSideNav(event: Event)
  {
      this.eventEmitter.emit(event);
  }
  public clicked()
  {
      console.log('this works');
  }

}
