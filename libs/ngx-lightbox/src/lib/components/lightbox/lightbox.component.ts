import { Component, OnInit, Inject } from '@angular/core';
import { NgxHotkeysService } from '@balticcode/ngx-hotkeys';
import {
  ModuleConfig,
  GalleryAlbum,
  ILightboxOptions
} from './../../interfaces';
import { ConfigToken } from './../../tokens';
import { GalleryFile } from '../../interfaces';
import { defaultConfig } from '../../defaults';

@Component({
  selector: 'ngxl-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {
  isVisible = false;
  files: GalleryFile[] = [];
  config: ILightboxOptions;

  private currentIndex = 0;

  private readonly _hotKeys: Array<{ key: string; binding: () => void }> = [
    {
      key: 'left',
      binding: () => this.prevFile()
    },
    {
      key: 'right',
      binding: () => this.nextFile()
    },
    {
      key: 'esc',
      binding: () => this.hide()
    }
  ];

  constructor(@Inject(ConfigToken) private _config: ModuleConfig, private hotKeyService: NgxHotkeysService) {
    this.config = {
      ...defaultConfig.lightboxOptions,
      ...this._config.lightboxOptions
    };
  }

  ngOnInit(): void {
    this.setupHotKeys();
  }

  show(album: GalleryAlbum): void {
    this.files = album.files;
    this.isVisible = true;
  }

  hide(): boolean {
    this.isVisible = false;
    return false;
  }

  setCurrentFileIndex(index: number): void {
    this.currentIndex = index;
  }

  isCurrentFileIndex(index: number): boolean {
    return this.currentIndex === index;
  }

  prevFile(): boolean {
    this.currentIndex =
      this.currentIndex > 0 ? --this.currentIndex : this.files.length - 1;
    return false;
  }

  nextFile(): boolean {
    this.currentIndex =
      this.currentIndex < this.files.length - 1 ? ++this.currentIndex : 0;
    return false;
  }

  private setupHotKeys() {
    this._hotKeys.forEach((hotKey: { key: string; binding: () => void }) => {
      this.hotKeyService.register({
        combo: hotKey.key,
        handler: event => {
          hotKey.binding();
          return false;
        }
      });
    });
  }
}
