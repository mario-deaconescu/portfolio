import {Component, OnInit} from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit{

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Software Engineer Intern - DIGINESIS, 2022; Software Developer - NETLUP TECHNOLOGIES, 2022; ' +
        'University of Bucharest - Computer Science, 2022 - Present'
    });
  }

    protected readonly Array = Array;
}
