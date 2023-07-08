import { Component } from '@angular/core';
import {MainComponent, Page} from "../main/main.component";
import {Router} from "@angular/router";

@Component({
  selector: 'mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.sass']
})
export class MobileNavComponent {

  protected readonly MainComponent = MainComponent;

  constructor(private router: Router) { }

  protected get currentPage(): Page {
    const url = this.router.url;
    if(url.includes(Page.ABOUT)){
      return Page.ABOUT;
    }else if(url.includes(Page.PROJECTS)){
      return Page.PROJECTS;
    }else if(url.includes(Page.EXPERIENCE)){
      return Page.EXPERIENCE;
    }
    return Page.ABOUT;
  }
}
