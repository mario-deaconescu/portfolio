import {Component} from '@angular/core';
import {ChildrenOutletContexts, Router} from "@angular/router";
import {ScreenSize} from "../shared/screen-size.service";
import {routeAnimation} from "./route.animations";
import {animate, style, transition, trigger} from "@angular/animations";

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

  constructor(protected screenSize: ScreenSize, private router: Router, private contexts: ChildrenOutletContexts) {
  }

  public static readonly pageTitles: { [key in Page]: string } = {
    [Page.ABOUT]: 'About Me',
    [Page.PROJECTS]: 'Projects',
    [Page.EXPERIENCE]: 'Experience'
  }

  protected readonly pageTitles = MainComponent.pageTitles;

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

  public get title(): string{
    return this.currentPage ? MainComponent.pageTitles[this.currentPage] : '';
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
