import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  tweets = [];
  segment = 'home';
  options = {
    slidesPerView: 4,
    spaceBetween: 6,
    slidesOffsetBefore: 0
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/tweets.json').subscribe((data: any) => {
      console.log('tweets: ', data.tweets);
      this.tweets = data.tweets;
    });
  }
}
