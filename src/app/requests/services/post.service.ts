import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  http: HttpClient = inject(HttpClient);

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
