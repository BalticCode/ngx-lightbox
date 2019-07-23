import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ConfigToken } from './tokens';
import { ModuleConfig } from './interfaces';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AlbumComponent } from './components/album/album.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [GalleryComponent, AlbumComponent, LightboxComponent],
  exports: [GalleryComponent, AlbumComponent, LightboxComponent]
})
export class NgxLightboxModule {
  static forRoot(config: ModuleConfig): ModuleWithProviders {
    return {
      ngModule: NgxLightboxModule,
      providers: [{ provide: ConfigToken, useValue: config }]
    };
  }

  public constructor(
    @Optional()
    @SkipSelf()
    parentModule: NgxLightboxModule
  ) {
    if (parentModule) {
      throw new Error('NgxLightboxModule has already been imported.');
    }
  }
}
