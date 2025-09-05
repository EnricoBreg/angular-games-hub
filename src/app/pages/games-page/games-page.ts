import { Component, inject, OnInit } from '@angular/core';
import { GamesService } from './games-service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-games-page',
  imports: [],
  templateUrl: './games-page.html',
  styleUrl: './games-page.css',
})
export class GamesPage implements OnInit {
  games: Game[] = [];
  gamesService = inject(GamesService);

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
  }
}
