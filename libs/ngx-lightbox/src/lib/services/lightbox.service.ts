import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryAlbum } from '../interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  constructor(private _http: HttpClient) {}

  public loadGallery(configPath: string): Observable<GalleryAlbum[]> {
    return this._http.get<GalleryAlbum[]>(configPath);
  }
}
