export interface ModuleConfig {
  galleryOptions?: IGalleryOptions;
  albumOptions?: IAlbumOptions;
  lightboxOptions?: ILightboxOptions;
}

export interface IGalleryOptions {
  width?: string;
}

export interface IAlbumOptions {
  backgroundColor?: string;
  coverImageWidth?: string;
  coverImageMaxHeight?: string;
  titleColor?: string;
}

export interface ILightboxOptions {
  backdropColor?: string;
  closeIconColor?: string;
  dotColor?: string;
  imageMaxWidth?: string;
  imageMaxHeight?: string;
}

export interface GalleryAlbum {
  title: string;
  files?: GalleryFile[];
}

export interface GalleryFile {
  fileName: string;
  title: string;
}
