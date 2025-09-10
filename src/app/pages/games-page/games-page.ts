import { Component, inject, OnInit, signal } from '@angular/core';
import { GamesService } from './games-service';
import { Game } from '../../models/game';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { GameCard } from '../../shared/components/games/game-card/game-card';
import { ApiResponse } from '../../models/api-response';
import { CardSkeleton } from '../../shared/components/skeletons/card-skeleton/card-skeleton';
import { Pagination } from "../../shared/components/pagination/pagination";

@Component({
  selector: 'app-games-page',
  imports: [AsyncPipe, GameCard, CardSkeleton, Pagination],
  templateUrl: './games-page.html',
  styleUrl: './games-page.css',
})
export class GamesPage implements OnInit {
  private gamesService = inject(GamesService);

  numSkeleton = [...Array(20).keys()].map((i) => i + 1); // array di 20 interi
  games$!: Observable<ApiResponse<Game>>;

  currentPage = signal(1);
  pageSize = signal(20);

  ngOnInit(): void {
    this.games$ = this.gamesService.getAllGames();
  }
}

