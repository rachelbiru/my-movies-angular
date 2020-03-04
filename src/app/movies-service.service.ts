import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  handleError: any;
  constructor(public http: HttpClient) { }

  getMovies(movieName: string): Observable<Movie[]> {
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=3ea150464035bc92e08e1ecfd93b9557&query=${movieName}`)
      .pipe(
        map(movies => movies.results)
      );
  }

  getMovieById(movieId: number): Observable<Movie[]> {
    return this.http.get<any>(` https://api.themoviedb.org/3/movie/${movieId}?api_key=3ea150464035bc92e08e1ecfd93b9557`);
  }
}
