import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  movieId: number;
  movie: any;

  constructor( private http: MoviesServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.movieId = params.id);
  }

  ngOnInit() {
    this.http.getMovieById(this.movieId).subscribe(movie => {
      this.movie = movie;
     }, err => console.log(err));
  }

  goBack() {
    history.back();
  }


}
