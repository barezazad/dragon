import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  deviceXs: boolean | undefined;

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    // this.deviceXs = this.mediaObserver.isActive('xs') === true ? true : false;
    this.deviceXs = this.mediaObserver.isActive('xs') === true;
    // ? (this.deviceXs = true)
    // : (this.deviceXs = false);
  }
}
