import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Post } from '../services/post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  public posts: Post[]

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.fetchAll()
      .subscribe((res) => {
        this.posts = res
      })
  }

}
