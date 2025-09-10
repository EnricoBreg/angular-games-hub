import { Component, inject, OnInit } from '@angular/core';
import { GamesService } from './games-service';
import { Game } from '../../models/game';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { GameCard } from '../../shared/components/games/game-card/game-card';
import { ApiResponse } from '../../models/api-response';
import { CardSkeleton } from '../../shared/components/skeletons/card-skeleton/card-skeleton';

@Component({
  selector: 'app-games-page',
  imports: [AsyncPipe, GameCard, CardSkeleton],
  templateUrl: './games-page.html',
  styleUrl: './games-page.css',
})
export class GamesPage implements OnInit {
  private gamesService = inject(GamesService);

  numSkeleton = [...Array(20).keys()].map((i) => i + 1); // array di 20 interi
  games$!: Observable<ApiResponse<Game>>;

  ngOnInit(): void {
    this.games$ = this.gamesService.getAllGames();
  }
}

