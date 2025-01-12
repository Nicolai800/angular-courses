import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  counter = signal<number>(0);

  setCounter() {
    this.counter.set(3);
  }
  plusCounter() {
    this.counter.update((value) => value + 1);
  }

  doubleCounter = computed(() => {
    return this.counter() * 2;
  });
}
