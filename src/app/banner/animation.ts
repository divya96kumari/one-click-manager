import { transition, style, animate, state, trigger, query, stagger } from '@angular/animations';

export const inOutAnimation = trigger('filterAnimation', [
  transition('* => *', [
    query('.bg-div', style({ opacity: 0 }), { optional: true }),
    query('.bg-div',
      stagger('15000ms', [
        animate('4000ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ]), { optional: true })
  ]),
]);

