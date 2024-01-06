import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post';
import { ApiServiceService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{
  postList!: Post[] ;
  itemsPerPage = 5;
  currentPage = 1;
  totalItems = 100;
  pagingConfig = {
    itemsPerPage: this.itemsPerPage,
    currentPage: this.currentPage,
    totalItems: this.totalItems
  }
  params= {
    _start : 0,
    _limit :this.itemsPerPage
  }
  constructor(private apiServiceService: ApiServiceService){}

  ngOnInit(): void{
    this.getPostList();
  }

  getPostList(){
    this.apiServiceService.getPostList(this.params).subscribe(res => {
      this.postList = res;
    })
  }

  pageChange(e: number){
    this.pagingConfig.currentPage = e;
    this.params= {
      _start : (this.pagingConfig.currentPage -1) *  this.pagingConfig.itemsPerPage,
      _limit : this.params._limit
    }
    this.getPostList();
  }

}
