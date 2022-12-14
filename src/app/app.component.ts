import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddBookmarkComponent } from './Features/add-bookmark/add-bookmark.component';
import { Bookmark } from './Models/bookmark';
import { Category } from './Models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
