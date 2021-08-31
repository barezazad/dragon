import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { isArray } from 'lodash';
import { CheckAuthService } from '../services/check-auth.service';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {

  constructor(
    private authService: CheckAuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  @Input() set appPermission(key: any) {
    if (isArray(key)) {
      // support array permission
      for (const el of key) {
        if (this.authService.checkPermission(el)) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          break;
        } else {
          this.viewContainer.clear();
        }
      }
    } else {
      if (this.authService.checkPermission(key)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }
  }

}
