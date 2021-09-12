import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { constant } from '../const';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public renderer: Renderer2;
  themes: any = constant.themes;

  constructor(
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  /** Add class to body-tag */
  addTheme(classToAdd: any): void {
    if (!this.themes.filter((e: { name: string; }) => e.name === classToAdd).length) {
      classToAdd = this.themes[1].name;
    }
    this.renderer.addClass(document.body, classToAdd);

    for (const el of this.themes) {
      if (el.name !== classToAdd) {
        this.renderer.removeClass(document.body, el.name);
      }
    }
    localStorage.setItem('theme', classToAdd);
  }
  /** Remove class from body-tag */
  removeTheme(classToRemove: any): void {
    this.renderer.removeClass(document.body, classToRemove);
  }
}
