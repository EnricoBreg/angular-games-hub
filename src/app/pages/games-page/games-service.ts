import { inject, Injectable } from '@angular/core';
import { Game } from '../../models/game';
import { catchError, map, Observable, retry } from 'rxjs';
import { ApiResponse } from '../../models/api-response';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private readonly endpoint = 'games';
  private http = inject(HttpClient);

  getAllGames(page?: number, pageSize?: number) {
    let params = new HttpParams();
    if (page != null) params = params.set('page', String(page));
    if (pageSize != null) params = params.set('page_size', String(pageSize));

    const response = this.http
      .get<ApiResponse<Game>>(this.endpoint, { params })
      .pipe(
        retry(1),
        /* map(games => games.results.map(game => ({...game, released: new Date(game.released)}))) */
      );

    return response;
  }

  /* private handleError(error: any) {
    console.error('API error', error);
    return throwError(() => new Error(error?.message ?? 'Server error'));
  } */

  /*
   * metodo di esempio usato per provare le chiamate
   */
  /* getPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts"
    return this.http.get<Post[]>(url);
  } */
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
