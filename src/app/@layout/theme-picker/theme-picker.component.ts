import { Component, OnInit } from '@angular/core';
import { constant } from 'src/app/@core/const';
import { StorageService } from 'src/app/@core/services/storage.service';
import { ThemeService } from 'src/app/@core/services/theme.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {

  themes: any = constant.themes;
  currentTheme: string | undefined;

  constructor(
    private theme: ThemeService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.currentTheme = this.storageService.get('theme');
  }

  changeTheme(theme: any): void {
    this.theme.addTheme(theme);
    this.currentTheme = theme;
  }


}
