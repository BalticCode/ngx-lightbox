import { HotkeyService } from './../../services/hotkey.service';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import * as Hammer from 'hammerjs';
import {
  ModuleConfig,
  GalleryAlbum,
  ILightboxOptions
} from './../../interfaces';
import { ConfigToken } from './../../tokens';
import { GalleryFile } from '../../interfaces';
import { defaultConfig } from '../../defaults';

const hammerAvailable = !!(typeof window !== 'undefined' ? (window as any).Hammer : undefined);

@Component({
  selector: 'ngxl-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {
  isVisible = false;
  album: GalleryAlbum;
  files: GalleryFile[] = [];
  config: ILightboxOptions;

  @ViewChild('lightbox', { static: true })
  lightbox: HTMLElement;

  private currentIndex = 0;

  private readonly _hotKeys: Array<{ key: string; binding: () => void }> = [
    {
      key: 'arrowleft',
      binding: () => this.prevFile()
    },
    {
      key: 'arrowright',
      binding: () => this.nextFile()
    },
    {
      key: 'esc',
      binding: () => this.hide()
    }
  ];

  constructor(
    @Inject(ConfigToken) private _config: ModuleConfig,
    private hotKeyService: HotkeyService
  ) {
    this.config = {
      ...defaultConfig.lightboxOptions,
      ...(this._config ? this._config.lightboxOptions : {})
    };
  }

  ngOnInit(): void {
    this.setupHotKeys();
    if (hammerAvailable && this.lightbox) {
      this.setupHammerJs();
    }
  }

  show(album: GalleryAlbum): void {
    this.album = album;
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

  private setupHotKeys(): void {
    this._hotKeys.forEach((hotKey: { key: string; binding: () => void }) => {
      this.hotKeyService
        .addShortcut({
          keys: hotKey.key
        })
        .subscribe(() => {
          hotKey.binding();
        });
    });
  }

  private setupHammerJs(): void {
    const hammertime = new Hammer(this.lightbox);
    hammertime.on('swipeleft', () => {
      this.nextFile();
    });
    hammertime.on('swiperight', () => {
      this.prevFile();
    });
  }
}
