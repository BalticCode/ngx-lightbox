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
    closeIconColor: '#f1f1f1',
    dotColor: '#ffffff',
    imageMaxWidth: '90%',
    imageMaxHeight: '75%'
  }
};
