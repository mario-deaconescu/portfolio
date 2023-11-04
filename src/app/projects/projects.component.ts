import {Component, OnInit} from '@angular/core';
import {Platform} from "@angular/cdk/platform";
import {Meta} from "@angular/platform-browser";
import {DarelyProjectComponent} from "./darely-project/darely-project.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit{

  constructor(protected platform: Platform, private meta: Meta) {
  }

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'DareX - Share dares with your friends and earn points; ' +
        'Various Fits - Create new outfits based on your preferences; ' +
        'Q++ - Quantum Computing SDK, made with C++; ' +
        'WebAssembly Text Interpreter - Run WebAssembly Text format using python; '
    });
  }

    protected readonly DarelyProjectComponent = DarelyProjectComponent;
}
