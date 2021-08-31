import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, scan } from 'rxjs/operators';
import { SpinnerOverlayComponent } from './spinner-overlay.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerOverlayService {

  private spinnerTopRef: OverlayRef;

  private spin$: Subject<number> = new Subject();

  constructor(
    private overlay: Overlay,
  ) {

    this.spinnerTopRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });

    this.spin$
      .asObservable()
      .pipe(
        scan((acc, next) => {
          if (!next) { return 0; }
          return (acc + next) >= 0 ? acc + next : 0;
        }, 0),
        map(val => val > 0),
        distinctUntilChanged()
      )
      .subscribe(
        (res) => {
          if (res) {
            this.spinnerTopRef.attach(new ComponentPortal(SpinnerOverlayComponent));
          }
          else if (this.spinnerTopRef.hasAttached()) {
            this.spinnerTopRef.detach();
          }
        }
      );
  }
  show(): void {
    this.spin$.next(1);
  }
  hide(): void {
    this.spin$.next(-1);
  }
  reset(): void {
    this.spin$.next(0);
  }
}
