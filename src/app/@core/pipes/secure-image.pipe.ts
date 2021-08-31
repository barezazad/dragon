import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { CheckAuthService } from './../services/check-auth.service';

@Pipe({
  name: 'secureImage'
})
export class SecureImagePipe implements PipeTransform {

  constructor(
    private http: HttpClient,
    private checkAuthService: CheckAuthService
  ) { }

  async transform(src: string): Promise<string> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${this.checkAuthService.getToken()}` });
    try {
      const imageBlob = await this.http.get(src, { headers, responseType: 'blob' }).toPromise();
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(imageBlob);
      });
    } catch {
      return './assets/img/logo3.png';
    }
  }

}
