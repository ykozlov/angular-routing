import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  templateUrl: './user-list.component.html',

  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  optionalParameter: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => this.optionalParameter = params['foo'] || null);
  }

}
