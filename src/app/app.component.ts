import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBookmarkComponent } from './Features/add-bookmark/add-bookmark.component';
import { Bookmark } from './Models/bookmark';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookmarkMaager';
  bookmarks: Bookmark[] = [];
  constructor(public dialog: MatDialog) {}

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
   
  
  }
  
}
