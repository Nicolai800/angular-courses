import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { SignalComponent } from '../../components/signal/signal.component';

// const enterTransition = transition(':enter', [
//   style({ opacity: 0 }),
//   animate('1s ease-in', style({ opacity: 1 })),
// ]);
// const leaveTransition = transition(':leave', [
//   style({ opacity: 1 }),
//   animate('1s ease-out', style({ opacity: 0 })),
// ]);

const fadeInOut = trigger('fadeInOut', [
  state('open', style({ opacity: 1 })),
  state('close', style({ opacity: 0 })),
  transition('open => close', [animate('1s ease-out')]),
  transition('close => open', [animate('1s ease-in')]),
]);

@Component({
  selector: 'app-animations',
  imports: [SignalComponent],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  animations: [fadeInOut],
})
export class AnimationsComponent {
  isShow = false;
}
