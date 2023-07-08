import {animate, animateChild, group, query, sequence, style, transition, trigger} from "@angular/animations";

// Fade from old page to new page
export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', style({position: 'absolute', width: 'calc(100% - 4rem)'})
      , {optional: true}),
    query(':enter', style({opacity: 0})
      , {optional: true}),
    sequence([
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          style({opacity: 1}),
          animate('0.2s ease', style({opacity: 0}))
        ], {optional: true}),
        query(':enter', [
          style({opacity: 0}),
          animate('0.5s ease', style({opacity: 1}))
        ], {optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
    ])
  ])
]);
