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
  iconColor?: string;
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

export interface HotkeyOptions {
  element: any;
  /**
   * Key binding.
   */
  keys: string | string[];
  /**
   * Description shown in cheatsheet.
   */
  description: string;
  /**
   * Custom display format used in cheatsheet.
   */
  format: string[];
  handler: () => void;
}

