import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';

const routes: Routes = [
  {path: '', component:PostListComponent},
  {path: ':id', component: PostDetailsComponent},
  {path: 'edit/:id', component: PostUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
