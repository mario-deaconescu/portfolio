import {Component, OnInit} from '@angular/core';
import {ScreenSize} from "../shared/screen-size.service";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor(protected screenSize: ScreenSize, private meta: Meta) {
  }

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'I am a software engineer from Romania, currently open to new opportunities. I code with passion and I love to learn new things.'
    });
  }
}
