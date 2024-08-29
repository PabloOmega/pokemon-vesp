import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons/pokemons.service';
import { PostsService, Post } from '../../services/posts/posts.service';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  posts: Post[] = [];
  form: FormGroup;

  constructor(public pokemonsService: PokemonsService, 
    private postsService: PostsService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      userId: ["", Validators.required],
      title: ["", Validators.required],
      body: ["", [Validators.required, Validators.minLength(10)]],
    })
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

  onSubmit(): void{
    const post = this.form.value;
    if(this.form.valid){
      this.postsService.createPost(post).subscribe((post) => {
        //this.posts.push(post);
        this.posts.unshift(post);
        this.form.reset();
      });
    }
  }

  updatePost(post: Post): void {
    if(this.form.invalid) return;
    const newPost = {...post, ...this.form.value};
    this.postsService.updatePost(newPost).subscribe((post) => {
      const index = this.posts.findIndex(p => p.id === post.id);
      this.posts[index] = post;
    })
  }

  deletePost(post: Post): void {
    this.postsService.deletePost(post).subscribe(() => {
      this.posts = this.posts.filter(p => p.id !== post.id);
    });
  }
}
