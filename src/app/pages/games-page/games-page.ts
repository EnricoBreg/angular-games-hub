import { Component, inject, OnInit } from '@angular/core';
import { GamesService, Post } from './games-service';
import { Game } from '../../models/game';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-games-page',
  imports: [AsyncPipe],
  templateUrl: './games-page.html',
  styleUrl: './games-page.css',
})
export class GamesPage implements OnInit {
  private gamesService = inject(GamesService);
  games$!: Observable<Game[]>;

  ngOnInit(): void {
    this.games$ = this.gamesService.getAllGames().pipe(
      map(response => {console.log(response.results); return response.results})
    );
  }
}

