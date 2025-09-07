import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { GamesService, Post } from './games-service';
import { Game } from '../../models/game';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, tap } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { GameCard } from '../../shared/components/games/game-card/game-card';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-games-page',
  imports: [AsyncPipe, GameCard],
  templateUrl: './games-page.html',
  styleUrl: './games-page.css',
})
export class GamesPage implements OnInit {
  private gamesService = inject(GamesService);
  games$!: Observable<Game[]>;

  ngOnInit(): void {
    this.games$ = this.gamesService
      .getAllGames()
      .pipe(
        map((response) => response.results),
      );
  }
}

