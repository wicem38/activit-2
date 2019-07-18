import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lastUpdate = new Date();
  posts = [
    {
      title: 'Mon prmier post',
      content: 'syrine bouaneni est la fille de wissem bouaneni'

    },
    {
      title: 'Ma deuxieme Poste',
      content: 'iness bouanani est la cousine de wissem bouaneni'
    },
    {
      title: 'Encore un post',
      content: 'wissem bouaneni ancien joueur de judo en tunisie'
    }
  ]

}
