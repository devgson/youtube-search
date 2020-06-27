// search-list.component.ts

import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../../shared/models/search.interface';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input() videos: Video[];

  constructor() { }

  ngOnInit() {
  }
}
