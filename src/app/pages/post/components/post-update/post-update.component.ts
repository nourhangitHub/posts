import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Post } from 'src/app/core/interfaces/post';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.scss']
})
export class PostUpdateComponent implements OnInit {
  postID!: string;
  post!: Post;
  postForm!: FormGroup;
   constructor(private route: ActivatedRoute, 
    private apiServiceService: ApiServiceService, 
    private fb: FormBuilder,
    private router: Router){}

   ngOnInit(): void {
    this.postID = this.route.snapshot.paramMap.get('id') as string;
    this.postID ? this.getPostData() : false; 
   }

    getPostData(){
      this.apiServiceService.postData(this.postID).subscribe(res => {
        this.post= res;
        this.initForm();
      })
    }

    initForm(){
      this.postForm = this.fb.group({
        id: [this.post.id, Validators.required],
        userId: [this.post.userId, Validators.required],
        title: [this.post.title, Validators.required],
        body: [this.post.body, Validators.required],
      })
    }

    editPost(){
      this.apiServiceService.updatePost(this.postForm.value).subscribe(res => {
        this.router.navigate(['./']);
        
      })
    }

}
