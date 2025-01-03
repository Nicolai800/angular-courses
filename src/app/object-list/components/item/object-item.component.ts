import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MyObject, myObjects } from '../list/object-list.component';

@Component({
  selector: 'app-object-item',
  imports: [],
  templateUrl: './object-item.component.html',
  styleUrl: './object-item.component.scss',
})
export class ObjectItemComponent {
  object?: MyObject;

  private route = inject(ActivatedRoute);

  // constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.object = myObjects.find((object) => object.id === +params['id']);
    });
  }
}
