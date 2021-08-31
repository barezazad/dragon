import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerOverlayService } from '../../@shared/components/spinner-overlay/spinner-overlay.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = new Subject<boolean>();

  constructor(private spinner: SpinnerOverlayService) { }

  show(): void {
    setTimeout(() => {
      // this.isLoading.next(true);
      this.spinner.show();
    }, 1);
  }

  hide(): void {
    setTimeout(() => {
      // this.isLoading.next(false);
      this.spinner.hide();
    }, 1);
  }
}
