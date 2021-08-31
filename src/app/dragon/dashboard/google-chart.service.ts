import { Injectable } from '@angular/core';

declare var google: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleChartService {
  private readonly google: any;
  constructor() {
    this.google = google;
  }

  getGoogle(): void {
    return this.google;
  }
}
