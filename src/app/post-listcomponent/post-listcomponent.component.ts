import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-listcomponent',
  templateUrl: './post-listcomponent.component.html',
  styleUrls: ['./post-listcomponent.component.scss']
})
export class PostListcomponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() LoveIts = 0 ;

  lastUpdate = new Date();
  constructor() { }

  ngOnInit() {
  }
  getColor() {
    if ((this.LoveIts > 0)) {
      return 'green';
    } else if (this.LoveIts < 0) {
      return 'red';
    }
  }
  numberLove(){
    this.LoveIts = this.LoveIts + 1;
  }
  Dontlove() {
    this.LoveIts = this.LoveIts - 1;
  }
}
