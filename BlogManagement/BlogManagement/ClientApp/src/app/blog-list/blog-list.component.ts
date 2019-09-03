import { Component } from '@angular/core';

@Component({
  selector: 'blog-list-component',
  templateUrl: './blog-list.component.html'
})
export class BlogComponent {
  public blogs = [
    { "Name": "Blog Hamida", "Description": "This is for modification.", "Period": "Last updated 3 mins ago"},
    { "Name": "Blog Mohamed", "Description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", "Period": "Last updated 4 mins ago" },
    { "Name": "Blog Rayen", "Description": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", "Period": "Last updated 5 mins ago" }
  ]
}
