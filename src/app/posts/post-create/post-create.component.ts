import { Component } from '@angular/core';

@Component({
  selector : 'app-post-create',
  templateUrl : './post-create.component.html',
  styleUrls : ['./post-create.component.css']
})
export class PostCreateComponent{
  inputValue = 'Enter Input';
  newPost = 'No Content';

  onCreatePost(){
    // alert("Post Created");
    // console.log(postInput.value);
    this.newPost = this.inputValue;
  }
}
