import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LightboxService, GalleryAlbum } from '@balticcode/ngx-lightbox';

@Component({
  selector: 'ngx-lightbox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-lightbox-demo';

  $album: Observable<GalleryAlbum[]>;

  constructor(private _galleryService: LightboxService) {
  }

  ngOnInit(): void {
    this.$album = this._galleryService.loadGallery('/assets/demo-gallery.json');
  }
}
