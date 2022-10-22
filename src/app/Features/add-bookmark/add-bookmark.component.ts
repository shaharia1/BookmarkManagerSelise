import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bookmark } from 'src/app/Models/bookmark';
import { Category } from 'src/app/Models/category';
import { BookmarkService } from 'src/app/Services/bookmark.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css']
})
export class AddBookmarkComponent implements OnInit {

  bookmark: Bookmark = new Bookmark();
  category: Category = new Category();
  bookmarks: Bookmark[] = [];
  categories: Category[] = [];
  viewCategories: Category[] = [];
  viewbookmarks: Bookmark[] = [];

  Category='';
  categoryName: string | undefined;
  CategoryText: string | undefined;
  url: string | undefined;
  title: string | undefined;
  productCookie: any;
  constructor(
    public dialogRef: MatDialogRef<AddBookmarkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bookmark,
    private _Service: BookmarkService,
  ) {}

  toggle:boolean = true;

 
  ngOnInit(): void {
    // console.log(localStorage.getItem('dataSource'));
    this.getCategory();
    this.getBookmark();
  }

  change(){
    this.toggle = !this.toggle;
  }

  
  onUrlChange(event: string): void {  
    // console.log(event);
    this.title = event;
    
  }
  onTitleChange(event: string): void {  
    // console.log(event);
    this.url = event;
    
  }

  onBookChange(event: string){
    console.log(event);
  }

  onSaveBokMark(): void {
    // this.dialogRef.close();
    const a1: Bookmark = {
      Ttle: this.title,
      Url:this.url,
      CaegoryName:this.CategoryText
      
    };
  
    this.bookmarks.push(a1);
    
    console.log(a1);
    localStorage.setItem('Bookmark', JSON.stringify(this.bookmarks));
  }

  

onCategoryAdd(event: string): void {  
  // console.log(event);
  this.categoryName = event;
  
}

onSaveCategory():void{

  // this.categories = [];
  const a1: Category = {
    Name: this.categoryName
    
  };

  this.categories.push(a1);
  
  
  localStorage.setItem('Category', JSON.stringify(this.categories));
 
  
  

  this.getCategory();
}

getCategory(){
  localStorage.getItem('Category');
  
  this.viewCategories = JSON.parse(localStorage.getItem("Category") || '{}');
 

}

getBookmark(){
  localStorage.getItem('Bookmark');
  
  this.viewbookmarks = JSON.parse(localStorage.getItem("Bookmark") || '{}');
 

}


}
