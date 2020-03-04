import { Component, OnInit, HostListener } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';
import { Movie } from '../movie';
import { History } from '../history';


@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  movies: Movie[];
  searchHistory: History;
  searchHistoryArr = JSON.parse(localStorage.getItem('searchHistory'));
  inputSearch: string;

  constructor(private http: MoviesServiceService) { }

  onSubmit() {
    this.pushToArrHistory();
    this.http.getMovies(this.inputSearch).subscribe(movies => {
     this.movies = movies;
    }, err => console.log(err));
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // tslint:disable-next-line: deprecation
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }

  pushToArrHistory() {
    this.searchHistory = {
      movieName: this.inputSearch,
      searchDate: new Date()
    };
    this.searchHistoryArr.push(this.searchHistory);
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistoryArr));
  }


  ngOnInit() {}
}
