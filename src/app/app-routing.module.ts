import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { SearchHistoryComponent } from './search-history/search-history.component';


const routes: Routes = [
  {path: '', component: SearchMoviesComponent },
  {path: 'single-movie/:id', component: SingleMovieComponent },
  {path: 'history', component: SearchHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
