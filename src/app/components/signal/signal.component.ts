import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

export interface TodoItem {
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  counter = signal<number>(0);
  showCounter = signal<boolean>(false);
  todos = signal<TodoItem[]>([
    { title: 'Lern Signals', done: false },
    { title: 'Lern Signals', done: false },
    { title: 'Lern Signals', done: false },
    { title: 'Lern Signals', done: false },
  ]);

  changeTodoStatus(index: number) {
    this.todos.update((val) => {
      val[index].done = !val[index].done;
      return val;
    });
  }

  setCounter() {
    this.counter.set(3);
  }
  setShowCounter() {
    this.showCounter.set(!this.showCounter());
  }
  plusCounter() {
    this.counter.update((value) => value + 1);
  }

  doubleCounter = computed(() => {
    return this.counter() * 2;
  });
  counterMiltFour = computed(() => {
    return this.counter() * 4;
  });
  conditionalCount = computed(() => {
    if (this.showCounter()) {
      return `The count is ${this.counter()}`;
    } else {
      return 'HIDE';
    }
  });
}
