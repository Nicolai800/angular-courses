import { Component, inject } from '@angular/core';
import { PostService, Post } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from '../post-item/post-item.component';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, PostItemComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent {
  postService = inject(PostService);

  posts: Post[] = [];

  ngOnInit() {
    this.postService.getPosts().subscribe((res) => (this.posts = res));
  }
}
