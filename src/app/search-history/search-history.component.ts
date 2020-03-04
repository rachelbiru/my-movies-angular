import { Component, OnInit } from '@angular/core';
import { History } from '../history';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {

  searchHistory: History[];

  constructor() { }

  getHistory() {
    this.searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
  }

  ngOnInit() {
    this.getHistory();
  }

}
