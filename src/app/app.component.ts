import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private heros: any[] = [];

  constructor(private http:HttpClient) {
    this.GetOverwatchHeros().toPromise().then((heros => this.heros = heros));
  }

  title = 'Fortnite items';

  GetOverwatchHeros() {
    return this.http.get('https://fortnite-public-api.theapinetwork.com/prod09/items/list');
  }
}
