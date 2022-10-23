import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkLandingComponent } from './Features/bookmark-landing/bookmark-landing.component';
import { BookmarkdetailsComponent } from './Features/bookmarkdetails/bookmarkdetails.component';

const routes: Routes = [
  { path: '', component: BookmarkLandingComponent },
    { path: 'home', component: BookmarkLandingComponent },
  { path: 'details', component: BookmarkdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
