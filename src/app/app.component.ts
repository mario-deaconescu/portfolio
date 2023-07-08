import {Component, OnInit} from '@angular/core';
import {ScreenSize} from "./shared/screen-size.service";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  readonly title = 'Mario Deaconescu';
  private readonly keywords = [
    'Mario Deaconescu',
    'Resume',
    'CV',
    'Angular',
    'Software',
    'Developer',
    'Frontend',
    'Backend',
    'Fullstack',
    'Freelance',
    'Django',
    'Python',
    'Java',
    'Azure',
    'Javascript',
    'Typescript',
    'HTML',
    'CSS',
    'Cloud',
    'App',
    'Web',
    'Website',
    'Portfolio',
  ]

  constructor(protected screenSize: ScreenSize, private meta: Meta) {
  }

  ngOnInit(): void {
    this.meta.addTag({name: 'author', content: 'Mario Deaconescu'});
    this.meta.addTag({
      name: 'keywords',
      content: this.keywords.join(', ')
    });
    this.meta.addTag({
      name: 'description',
      content: "Mario Deaconescu's personal website"
    });
  }
}
