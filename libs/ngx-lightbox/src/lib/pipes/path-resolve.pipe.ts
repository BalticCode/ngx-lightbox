import { Pipe, PipeTransform } from '@angular/core';
import { GalleryFile } from '../interfaces';

@Pipe({
  name: 'pathResolve'
})
export class PathResolvePipe implements PipeTransform {

  transform(file: GalleryFile, path?: string): string {
    return !path ? file.fileName : `${path}/${file.fileName}`;
  }
}
