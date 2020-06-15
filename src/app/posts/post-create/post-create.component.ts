import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from "../post.model";

@Component({
  selector : 'app-post-create',
  templateUrl : './post-create.component.html',
  styleUrls : ['./post-create.component.css']
})
export class PostCreateComponent{
  inputContent = '';
  inputTitle = '';
  // newPost = 'No Content';
  @Output() postCreated = new EventEmitter<Post>();

  onCreatePost(){
    // alert("Post Created");
    // console.log(postInput.value);
    // this.newPost = this.inputContent;
    const post: Post = {
      title: this.inputTitle,
      content: this.inputContent
    };
    this.postCreated.emit(post);
  }
}
