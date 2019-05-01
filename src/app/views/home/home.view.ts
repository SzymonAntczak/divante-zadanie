import { Component, OnInit } from '@angular/core';
import { ApiHomeService } from '../../core/api/api-home/api-home.service';
import { Product } from '../../core/api/api-home/api-home.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dvt-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {
  public products$: Observable<Product[]>;

  constructor(
    private apiHomeService: ApiHomeService
  ) { }

  ngOnInit() {
    this.products$ = this.apiHomeService.getProducts();
  }

}
