import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
    
export class PostDetailsComponent implements OnInit{
  postID!: string;
  postDetails$!: Observable<any>;
  constructor(private apiServiceService: ApiServiceService, private route: ActivatedRoute){}

   ngOnInit(): void {
    this.postID = this.route.snapshot.paramMap.get('id') as string;
    this.postDetails$ = this.apiServiceService.getPostDetails(this.postID);
   }


}
