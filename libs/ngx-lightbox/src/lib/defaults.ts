import { ModuleConfig } from './interfaces';


export const defaultConfig: ModuleConfig = {
  albumOptions: {
    backgroundColor: '#0d47a1',
    coverImageWidth: '100%',
    coverImageMaxHeight: '8em',
    titleColor: '#ffffff'
  },
  galleryOptions: { width: '85%' },
  lightboxOptions: {
    backdropColor: 'rgba(0,0,0,0.9)',
    iconColor: '#f1f1f1',
    dotColor: '#0d47a1',
    imageMaxWidth: '90%',
    imageMaxHeight: '75%',
    captionColor: '#f1f1f1'
  }
};
