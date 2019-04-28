import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {
  products = [
    {
      id: '/dupa',
      title: 'Title',
      description: 'Descriptions',
      image: {
        src: 'assets/images/maxresdefault.jpg',
        alt: 'alt'
      }
    },
    {
      id: '/dupa',
      title: 'Title',
      description: 'Descriptions',
      image: {
        src: 'assets/images/maxresdefault.jpg',
        alt: 'alt'
      }
    },
    {
      id: '/dupa',
      title: 'Title',
      description: 'Descriptions',
      image: {
        src: 'assets/images/maxresdefault.jpg',
        alt: 'alt'
      }
    },
    {
      id: '/dupa',
      title: 'Title',
      description: 'Descriptions',
      image: {
        src: 'assets/images/maxresdefault.jpg',
        alt: 'alt'
      }
    },
    {
      id: '/dupa',
      title: 'Title',
      description: 'Descriptions',
      image: {
        src: 'assets/images/maxresdefault.jpg',
        alt: 'alt'
      }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
