import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { HighchartsChartModule } from 'highcharts-angular';
import { MaterialModule } from '../../@core/modules/material/material.module';
import { AreaComponent } from './area/area.component';
import { CardStatsComponent } from './card-stats/card-stats.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AreaComponent,
    LineChartComponent,
    PieChartComponent,
    CardStatsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HighchartsChartModule,
    TranslocoModule,
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: 'dashboard-module', alias: 'dashboard' },
    },
  ],
})
export class DashboardModule { }
