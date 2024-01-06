import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development'
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  URL = environment.BaseURL;
  
  constructor(private http: HttpClient) {}
  
   getPostList(params: any): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}/posts`,{
        params: {
          _start:params._start,
          _limit:params._limit
        },
    });
  }

  postData(postID: string): Observable<Post> {
    return this.http.get<Post>(`${this.URL}/posts/${postID}`);
  }

  updatePost(post : Post){
    return this.http.put<Post>(`${this.URL}/posts/${post.id}`, post);
  }

  getPostDetails(postID: string){
    return this.http.get<Post>(`${this.URL}/comments`,{
      params: {
        postId:postID
      },
    });
  }
}
