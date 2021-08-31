import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  chartOptions1!: {};
  chartOptions2!: {};
  chartOptions3!: {};
  chartOptions4!: {};
  chartOptions5!: {};

  constructor() { }

  ngOnInit(): void {
    // Line charts
    this.chartOptions1 = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Browser market shares. January, 2018',
      },
      subtitle: {
        text:
          'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
      },
      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        title: {
          text: 'Total percent market share',
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%',
          },
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: [
        {
          name: 'Browsers',
          colorByPoint: true,
          data: [
            {
              name: 'Chrome',
              y: 62.74,
              drilldown: 'Chrome',
            },
            {
              name: 'Firefox',
              y: 10.57,
              drilldown: 'Firefox',
            },
            {
              name: 'Internet Explorer',
              y: 7.23,
              drilldown: 'Internet Explorer',
            },
            {
              name: 'Safari',
              y: 5.58,
              drilldown: 'Safari',
            },
            {
              name: 'Edge',
              y: 4.02,
              drilldown: 'Edge',
            },
            {
              name: 'Opera',
              y: 1.92,
              drilldown: 'Opera',
            },
            {
              name: 'Other',
              y: 7.62,
              drilldown: null,
            },
          ],
        },
      ],
      drilldown: {
        series: [
          {
            name: 'Chrome',
            id: 'Chrome',
            data: [
              ['v65.0', 0.1],
              ['v64.0', 1.3],
              ['v63.0', 53.02],
              ['v62.0', 1.4],
              ['v61.0', 0.88],
              ['v60.0', 0.56],
              ['v59.0', 0.45],
              ['v58.0', 0.49],
              ['v57.0', 0.32],
              ['v56.0', 0.29],
              ['v55.0', 0.79],
              ['v54.0', 0.18],
              ['v51.0', 0.13],
              ['v49.0', 2.16],
              ['v48.0', 0.13],
              ['v47.0', 0.11],
              ['v43.0', 0.17],
              ['v29.0', 0.26],
            ],
          },
          {
            name: 'Firefox',
            id: 'Firefox',
            data: [
              ['v58.0', 1.02],
              ['v57.0', 7.36],
              ['v56.0', 0.35],
              ['v55.0', 0.11],
              ['v54.0', 0.1],
              ['v52.0', 0.95],
              ['v51.0', 0.15],
              ['v50.0', 0.1],
              ['v48.0', 0.31],
              ['v47.0', 0.12],
            ],
          },
          {
            name: 'Internet Explorer',
            id: 'Internet Explorer',
            data: [
              ['v11.0', 6.2],
              ['v10.0', 0.29],
              ['v9.0', 0.27],
              ['v8.0', 0.47],
            ],
          },
          {
            name: 'Safari',
            id: 'Safari',
            data: [
              ['v11.0', 3.39],
              ['v10.1', 0.96],
              ['v10.0', 0.36],
              ['v9.1', 0.54],
              ['v9.0', 0.13],
              ['v5.1', 0.2],
            ],
          },
          {
            name: 'Edge',
            id: 'Edge',
            data: [
              ['v16', 2.6],
              ['v15', 0.92],
              ['v14', 0.4],
              ['v13', 0.1],
            ],
          },
          {
            name: 'Opera',
            id: 'Opera',
            data: [
              ['v50.0', 0.96],
              ['v49.0', 0.82],
              ['v12.1', 0.14],
            ],
          },
        ],
      },
    };
    this.chartOptions2 = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Monthly Average Rainfall',
      },
      subtitle: {
        text: 'Source: WorldClimate.com',
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Rainfall (mm)',
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Tokyo',
          data: [
            49.9,
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            216.4,
            194.1,
            95.6,
            54.4,
          ],
        },
        {
          name: 'New York',
          data: [
            83.6,
            78.8,
            98.5,
            93.4,
            106.0,
            84.5,
            105.0,
            104.3,
            91.2,
            83.5,
            106.6,
            92.3,
          ],
        },
        {
          name: 'London',
          data: [
            48.9,
            38.8,
            39.3,
            41.4,
            47.0,
            48.3,
            59.0,
            59.6,
            52.4,
            65.2,
            59.3,
            51.2,
          ],
        },
        {
          name: 'Berlin',
          data: [
            42.4,
            33.2,
            34.5,
            39.7,
            52.6,
            75.5,
            57.4,
            60.4,
            47.6,
            39.1,
            46.8,
            51.1,
          ],
        },
      ],
    };

    // Area charts
    // @ts-ignore
    this.chartOptions3 = {
      chart: {
        type: 'area',
      },
      accessibility: {
        description: 'test',
      },
      title: {
        text: 'Dollar and Euro',
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      subtitle: {
        text:
          'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
          'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
          'armscontrol.org</a>',
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter(): any {
            // @ts-ignore
            return this.value; // clean, unformatted number for year
          },
        },
        accessibility: {
          rangeDescription: 'Range: 1940 to 2017.',
        },
      },
      yAxis: {
        title: {
          text: 'Dollar and Euro Exchange',
        },
        labels: {
          formatter(): any {
            // @ts-ignore
            return this.value / 1000 + 'k';
          },
        },
      },
      tooltip: {
        pointFormat:
          '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}',
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      series: [
        {
          name: 'Dollar',
          data: [
            null,
            null,
            null,
            null,
            null,
            6,
            11,
            32,
            110,
            235,
            369,
            640,
            1005,
            1436,
            2063,
            3057,
            4618,
            6444,
            9822,
            15468,
            20434,
            24126,
            27387,
            29459,
            31056,
            31982,
            32040,
            31233,
            29224,
            27342,
            26662,
            26956,
            27912,
            28999,
            28965,
            27826,
            25579,
            25722,
            24826,
            24605,
            24304,
            23464,
            23708,
            24099,
            24357,
            24237,
            24401,
            24344,
            23586,
            22380,
            21004,
            17287,
            14747,
            13076,
            12555,
            12144,
            11009,
            10950,
            10871,
            10824,
            10577,
            10527,
            10475,
            10421,
            10358,
            10295,
            10104,
            9914,
            9620,
            9326,
            5113,
            5113,
            4954,
            4804,
            4761,
            4717,
            4368,
            4018,
          ],
        },
        {
          name: 'Euro',
          data: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            5,
            25,
            50,
            120,
            150,
            200,
            426,
            660,
            869,
            1060,
            1605,
            2471,
            3322,
            4238,
            5221,
            6129,
            7089,
            8339,
            9399,
            10538,
            11643,
            13092,
            14478,
            15915,
            17385,
            19055,
            21205,
            23044,
            25393,
            27935,
            30062,
            32049,
            33952,
            35804,
            37431,
            39197,
            38000,
            39000,
            37000,
            39000,
            37000,
            35000,
            33000,
            31000,
            29000,
            27000,
            25000,
            24000,
            23000,
            22000,
            21000,
            20000,
            19000,
            18000,
            18000,
            17000,
            16000,
            15537,
            14162,
            12787,
            12600,
            11400,
            5500,
            4512,
            4502,
            4502,
            4500,
            4500,
          ],
        },
      ],
    };
    this.chartOptions4 = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region',
      },
      subtitle: {
        text: 'Source: Wikipedia.org',
      },
      xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
          enabled: false,
        },
      },
      yAxis: {
        title: {
          text: 'Billions',
        },
        labels: {
          formatter(): any {
            // @ts-ignore
            return this.value / 1000;
          },
        },
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions',
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666',
          },
        },
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: [
        {
          name: 'Asia',
          data: [502, 635, 809, 947, 1402, 3634, 5268],
        },
        {
          name: 'Africa',
          data: [106, 107, 111, 133, 221, 767, 1766],
        },
        {
          name: 'Europe',
          data: [163, 203, 276, 408, 547, 729, 628],
        },
        {
          name: 'America',
          data: [18, 31, 54, 156, 339, 818, 1201],
        },
        {
          name: 'Oceania',
          data: [2, 2, 2, 6, 13, 30, 46],
        },
      ],
    };

    // Pie Chart
    this.chartOptions5 = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Browser market shares in January, 2018',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          data: [
            {
              name: 'Chrome',
              y: 61.41,
              sliced: true,
              selected: true,
            },
            {
              name: 'Internet Explorer',
              y: 11.84,
            },
            {
              name: 'Firefox',
              y: 10.85,
            },
            {
              name: 'Edge',
              y: 4.67,
            },
            {
              name: 'Safari',
              y: 4.18,
            },
            {
              name: 'Sogou Explorer',
              y: 1.64,
            },
            {
              name: 'Opera',
              y: 1.6,
            },
            {
              name: 'QQ',
              y: 1.2,
            },
            {
              name: 'Other',
              y: 2.61,
            },
          ],
        },
      ],
    };
  }
}
