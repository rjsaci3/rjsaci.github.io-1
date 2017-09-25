import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const fabAnimation = trigger('snackbarState', [
    state('inactive', style({ transform: 'translateY(0)' })),
    state('active', style({ transform: 'translateY(-48px)' })),
    transition('inactive => active', animate('225ms cubic-bezier(0.4,0.0,1,1)')),
    transition('active => inactive', animate('195ms cubic-bezier(0.0,0.0,0.2,1)'))
]);

export const listAnimation = trigger('listState', [
    state('out', style({ transform: 'scale(0)' })),
    state('fade-out', style({ display: 'none' })),
    state('fade-in', style({ opacity: 1 })),
    transition('* => fade-out', [
        animate(200, keyframes([
            style({ opacity: 1, transform: 'translateX(-50px)', offset: 0 }),
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
        ]))
    ]),
    transition('* => fade-in', [
        animate(500, keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3, color: 'black' }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
    ]),
    transition('out => in', [
        animate(300, style({ transform: 'scale(1)' }))
    ])
]);

export const listIconAnimation = trigger('listIconState', [
    state('active', style({ display: 'inline-block' }))   
]);