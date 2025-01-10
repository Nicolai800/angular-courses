import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoItemI } from '../../decorators/decorators.component';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input('todo') todoItem!: TodoItemI;

  returnBool() {
    console.log('component rendered');

    return true;
  }

  changedInsideText() {
    this.todoItem.text = 'changed from inside';
  }
}
