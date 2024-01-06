import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    PostUpdateComponent
  ],
  imports: [
    FormsModule, 
    CommonModule,
    ReactiveFormsModule,
    PostRoutingModule,
    NgxPaginationModule
  ]
})
export class PostModule { }
