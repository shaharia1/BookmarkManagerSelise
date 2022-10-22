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
  viewCategories: [] = [];
  Category='';
  categoryName: string | undefined;
  CategoryText: string | undefined;
  url: string | undefined;
  title: string | undefined;
  constructor(
    public dialogRef: MatDialogRef<AddBookmarkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bookmark,
    private _Service: BookmarkService,
  ) {}

  toggle:boolean = true;

  change(){
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {
    // console.log(localStorage.getItem('dataSource'));
    this.getCategory();
  }
  onUrlChange(event: string): void {  
    // console.log(event);
    this.title = event;
    
  }
  onTitleChange(event: string): void {  
    // console.log(event);
    this.url = event;
    
  }

  onSaveBokMark(): void {
    // this.dialogRef.close();
    const a1: Bookmark = {
      Ttle: this.title,
      Url:this.url,
      CaegoryName:this.CategoryText
      
    };
  
    this.bookmarks.push(a1);
    
    
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
 
  
  
  
  // this._Service.saveData("category",this.category).subscribe(data => {
  //   if (data.type === HttpEventType.Response) {
  //     this.employee = data;
  //     alert("Update SuccessFull ");
  //     this.find();

  //   }
  // },
  //   error => {
  //     alert(error.error.ExceptionMessage);
  //   });
  
  // console.log(this.TaskList);
  this.getCategory();
}

getCategory(){
  var tt =localStorage.getItem('Category');
  
 
 
  
 console.log(localStorage.getItem('Category'));
}



  // categories: Category[] = [
  //   {Id: 1, Name: 'Steak'},
  //   {Id: 2, Name: 'Pizza'},
  //   {Id: 3, Name: 'Tacos'},
  // ];
 

}
