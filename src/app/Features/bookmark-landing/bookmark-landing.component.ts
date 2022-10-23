import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bookmark } from 'src/app/Models/bookmark';
import { Category } from 'src/app/Models/category';
import { AddBookmarkComponent } from '../add-bookmark/add-bookmark.component';

@Component({
  selector: 'app-bookmark-landing',
  templateUrl: './bookmark-landing.component.html',
  styleUrls: ['./bookmark-landing.component.css']
})
export class BookmarkLandingComponent implements OnInit {

  title = 'BookmarkMaager';
  bookmarks: Bookmark[] = [];
  Categories: Category[] = [];
  constructor(public dialog: MatDialog,private router: Router) {}

  ngOnInit(): void {
    // console.log(localStorage.getItem('dataSource'));

    this.getBookmark();
    this.getCategory();
  }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBookmarkComponent, {
      width: '50%',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  getBookmark(){
    localStorage.getItem('Bookmark');
    
    this.bookmarks = JSON.parse(localStorage.getItem("Bookmark") || '{}');
   
  console.log(localStorage.getItem('Bookmark'))
  }
  
  getCategory(){
    localStorage.getItem('Category');
    
    this.Categories = JSON.parse(localStorage.getItem("Category") || '{}');
   
  
  }


  login(){
    this.router.navigate(['/details']);
    
  }

}
