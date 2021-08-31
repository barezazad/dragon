import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { TopBar } from 'src/app/@core/interfaces/topbar';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() params: any;
  @Input() topBar!: TopBar;
  showFilter = false;

  @Output() listParam = new EventEmitter<{ params: any }>();
  @Output() eventActions = new EventEmitter<{ action: string, row: any }>();
  // example
  @Output() eventTopBarClient = new EventEmitter<{ data: any }>();

  constructor(
  ) { }

  ngOnInit(): void { }

  search(event: any): void {
    this.params.page = 0,
      this.params.search = event;
    return this.listParam.emit({
      params: this.params,
    });
  }

  // example
  emitClient(event: any): void {
    this.eventTopBarClient.emit({ data: event.data });
  }

}

