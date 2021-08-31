import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/@core/services/http.service';

@Component({
  selector: 'app-file-export',
  templateUrl: './file-export.component.html',
  styleUrls: ['./file-export.component.scss']
})
export class FileExportComponent implements OnInit {

  @Input() data: any;

  constructor(
    public httpService: HttpService
  ) { }

  ngOnInit(): void {

  }

  exportExcel(): void {
    // (await this.httpService.get(`temporary/token`))
    //   .subscribe(
    //     res => {
    //       this.openLink(res.data)
    //     },
    //     (error) => { }
    //   );
  }

  openLink(token: any): void {
    // var link = document.createElement("a");
    // link.href = `${env.apiUrlLink}/${this.data}?temporary_token=${token}`;
    // console.log(link.href)
    // link.target = "_blank";
    // link.click();
  }

}
