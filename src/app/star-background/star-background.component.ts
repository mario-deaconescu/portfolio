import {Component, Input, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';

interface Star {
  size: number;
  position: [x: number, y: number];
}

@Component({
  selector: 'star-background',
  templateUrl: './star-background.component.html',
  styleUrls: ['./star-background.component.sass']
})
export class StarBackgroundComponent implements OnInit, OnDestroy{
  @Input() starCount = 100;
  protected stars: WritableSignal<Star[]> = signal([]);
  private readonly updateInterval = 1000 / 30;
  private updateLoop: number | undefined;

  constructor() {
  }
  private updateStars(): void{
    this.stars.mutate(stars => {
      for(let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.position[1] -= star.size * .2;
        if(star.position[1] < 0) {
          star.position[1] = window.innerHeight;
        }
      }
      return stars;
    })
  }
  ngOnInit(): void {
    let stars: Star[] = [];
    for(let i = 0; i < this.starCount; i++) {
      stars.push({
        size: Math.random() * 4,
        // Random position within window size plus a little extra on the top
        position: [Math.random() * window.innerWidth, Math.random() * window.innerHeight]
      });
    }
    this.stars.set(stars);
    this.updateLoop = window.setInterval(() => {
      this.updateStars()
    }, this.updateInterval);
  }

  ngOnDestroy(): void {
    if(this.updateLoop) {
      window.clearInterval(this.updateLoop);
    }
  }
}
