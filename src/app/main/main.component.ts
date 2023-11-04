import {Component} from '@angular/core';
import {ChildrenOutletContexts, Router} from "@angular/router";
import {ScreenSize} from "../shared/screen-size.service";
import {routeAnimation} from "./route.animations";
import {animate, style, transition, trigger} from "@angular/animations";
import {AosService} from "../shared/services/aos.service";

export enum Page {
  ABOUT = 'about',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience'
}

@Component({
  selector: 'main-content',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  animations: [
    routeAnimation,
    trigger('grow', [
      transition('void <=> *', []),
      transition('* <=> *', [style({height: '{{startHeight}}px', opacity: 0}), animate('.5s ease')], {
        params: {startHeight: 0}
      })
    ])]
})

export class MainComponent {

  constructor(protected screenSize: ScreenSize, private router: Router, private contexts: ChildrenOutletContexts, protected aosService: AosService) {
  }

  public static readonly pageTitles: { [key in Page]: string } = {
    [Page.ABOUT]: 'about-me',
    [Page.EXPERIENCE]: 'experience',
    [Page.PROJECTS]: 'projects'
  }

  protected readonly pageTitles = MainComponent.pageTitles;

  protected get titles(): Page[] {
    return Object.keys(this.pageTitles) as Page[];
  }

  protected get currentPage(): Page | null {
    const url = this.router.url;
    if (url.includes(Page.ABOUT)) {
      return Page.ABOUT;
    } else if (url.includes(Page.PROJECTS)) {
      return Page.PROJECTS;
    } else if (url.includes(Page.EXPERIENCE)) {
      return Page.EXPERIENCE;
    }
    return null;
  }

  public get title(): string {
    return this.currentPage ? MainComponent.pageTitles[this.currentPage] : '';
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
