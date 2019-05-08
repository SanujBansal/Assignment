import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute ) { }
  private textPart;
  @ViewChild('togglepart')
    toggleit: ElementRef;

  @ViewChild('heading')
    heading: ElementRef;
    toggleSideNav()
    {
      //this will be called by the parent
      console.log(this.toggleit.nativeElement);
      
      this.textPart = this.toggleit.nativeElement.querySelectorAll('.text-part');
      for(let x of this.textPart)
      {
          x.hidden = !x.hidden;
      }
      console.log(this.textPart);

      this.heading.nativeElement.hidden = !this.heading.nativeElement.hidden;
    }
   gotoChild1()
   {
     this.router.navigate(['/dashboard','child1']);
   }
   gotoChild2()
   {
     this.router.navigate(['/dashboard','child2']);
   }
  ngOnInit() {
    this.route.paramMap.subscribe();
  }

}
