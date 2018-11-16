import { defaultConfig } from './../../defaults';
import { Component, Input, Inject } from '@angular/core';
import { GalleryAlbum, ModuleConfig, IAlbumOptions } from '../../interfaces';
import { ConfigToken } from '../../tokens';

@Component({
  selector: 'ngxl-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  @Input() album: GalleryAlbum;

  config: IAlbumOptions;

  constructor(@Inject(ConfigToken) private _config: ModuleConfig) {
    this.config = {
      ...defaultConfig.albumOptions,
      ...this._config.albumOptions
    };
  }
}
