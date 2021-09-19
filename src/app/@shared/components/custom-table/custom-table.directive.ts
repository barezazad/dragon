import { DatePipe } from '@angular/common';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomTable]'
})
export class CustomTableDirective implements OnInit {

  @Input() DataInput!: any;
  element: any;
  pipe = new DatePipe('en_Us');

  constructor(
    el: ElementRef,
  ) {
    this.element = el;
  }

  ngOnInit(): void {
    switch (this.DataInput.column) {
      case 'expiration':
        const now = this.pipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss+00:00');
        if (this.DataInput?.data?.expiration && now) {
          if (now > this.DataInput?.data?.expiration) {
            this.element.nativeElement.style.color = 'red';
          } else {
            this.element.nativeElement.style.color = 'green';
          }
        }
        break;
      default:
        break;
    }
  }

}
