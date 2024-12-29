import { Component, inject } from '@angular/core';
import { PostService, Post } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent {
  postService = inject(PostService);
  router = inject(Router);

  posts$?: Observable<Post[]>;

  redirectTo(id: number) {
    this.router.navigate([`/requests`, id]);
  }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }
}
