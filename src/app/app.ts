import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { GamesPage } from './pages/games-page/games-page';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [GamesPage]
})
export class App implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
