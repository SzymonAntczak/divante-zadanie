import { Component, OnInit } from '@angular/core';
import { AboutData } from '../../core/api/api-about/api-about.model';
import { ApiAboutService } from '../../core/api/api-about/api-about.service';

@Component({
  selector: 'dvt-about',
  templateUrl: './about.view.html',
  styleUrls: ['./about.view.scss']
})
export class AboutView implements OnInit {
  public aboutData: AboutData;

  constructor(
    private apiAboutService: ApiAboutService
  ) { }

  ngOnInit() {
    this.apiAboutService.getAboutData().subscribe(data => this.aboutData = data).unsubscribe();
  }

}
