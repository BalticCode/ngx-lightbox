import { Component, Inject, ViewChild, Input } from '@angular/core';
import {
  ModuleConfig,
  GalleryAlbum,
  IGalleryOptions
} from './../../interfaces';
import { ConfigToken } from './../../tokens';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { defaultConfig } from '../../defaults';

@Component({
  selector: 'ngxl-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @ViewChild(LightboxComponent, { static: true }) private lightBox: LightboxComponent;

  @Input() public albums: GalleryAlbum[];

  config: IGalleryOptions;

  constructor(@Inject(ConfigToken) private _config: ModuleConfig) {
    this.config = {
      ...defaultConfig.galleryOptions,
      ...this._config.galleryOptions
    };
  }

  showLightBox(album: GalleryAlbum): void {
    this.lightBox.show(album);
  }
}
