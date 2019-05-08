import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SideNavComponent } from './side-nav/side-nav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Assignment';
  @ViewChild(SideNavComponent)
  sideNav: SideNavComponent
  toggle(event: Event)
  {
    this.sideNav.toggleSideNav();
  }
  ngAfterViewInit(){
  }
  }

