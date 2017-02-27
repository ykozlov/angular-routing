import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('init details');

    // snapshot
      // let id = +this.route.snapshot.params['id'];
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
      });
  }

  goBack() {
    this.router.navigate(['/users', { foo: 'foo' }]);
  }

}
