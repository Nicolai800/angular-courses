import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService, Post } from '../../services/post.service';

@Component({
  selector: 'app-post-item',
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss',
})
export class PostItemComponent {
  route = inject(ActivatedRoute);
  postService = inject(PostService);

  post?: Post;
  id?: number;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.postService.getPost(this.id).subscribe((post) => {
        this.post = post;
      });
    });
  }
}
