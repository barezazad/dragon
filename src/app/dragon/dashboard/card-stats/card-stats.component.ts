import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.scss'],
})
export class CardStatsComponent implements OnInit {
  @Input() caption: string | undefined;
  @Input() total: string | undefined;
  @Input() percentage: string | undefined;
  @Input() symbol: string | undefined;

  constructor() { }

  ngOnInit(): void { }
}
