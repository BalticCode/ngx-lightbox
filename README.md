[![npm version](https://img.shields.io/npm/v/@balticcode/ngx-lightbox.svg)](https://www.npmjs.com/package/@balticcode/ngx-lightbox) [![Join the chat at https://gitter.im/balticcode/ngx-lightbox](https://badges.gitter.im/balticcode/ngx-lightbox.svg)](https://gitter.im/balticcode/ngx-lightbox?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
# ngx-lightbox

An Angular module providing a responsive gallery - including separat albums and a lightbox.

Feel free to take a look at the [DEMO](https://balticcode.github.io/ngx-lightbox/).

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)

## Installation

Install via npm:
```
npm install @balticcode/ngx-lightbox --save
```

## Usage

#### Import `NgxLightboxModule`

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxLightboxModule} from '@balticcode/ngx-lightbox';

@NgModule({
    imports: [
        BrowserModule,
        NgxLightboxModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### Optional configuration

The module ships with its own default configuration (listed below) but you can override it as you wish by passing your own configuration object (each property can be ommitted) to the `forRoot()` method as show below:
```ts
NgxLightboxModule.forRoot(
  {
    galleryOptions: {
      width: '85%'
    },
    albumOptions: {
      backgroundColor: '#0d47a1',
      coverImageWidth: '100%',
      coverImageMaxHeight: '8em',
      titleColor: '#ffffff'
    },
    lightboxOptions: {
      backdropColor: 'rgba(0,0,0,0.9)',
      iconColor: '#f1f1f1',
      dotColor: '#ffffff',
      imageMaxWidth: '90%',
      imageMaxHeight: '75%'
    }
  }
)
```

#### Using the gallery

Just insert the `<ngx-gallery></ngx-gallery>` tag somewhere inside your app's template:
```html
<ngx-gallery [albums]="$album | async"></ngx-gallery>
```

Use the library's service in the approriate component:
```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  $album: Observable<GalleryAlbum[]>;

  constructor(private _galleryService: LightboxService) {
  }

  ngOnInit(): void {
    this.$album = this._galleryService.loadGallery('/assets/demo-gallery.json');
  }
}
```

You need to define your gallery server-side using a json file with the following schema:
```json
{
  "type": "array",
  "items": {
    "properties": {
      "title": {
        "type": "string",
        "title": "Album title",
        "description": "Specifies the title of the album.",
        "examples": [
          "Amazing album title"
        ]
      },
      "files": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "title": "File/Photo title",
              "description": "Specifies the title of the photo.",
              "examples": [
                "Intro"
              ]
            },
            "fileName": {
              "type": "string",
              "title": "File/Photo path",
              "description": "Specifies the path of the photo.",
              "examples": [
                "https://images.unsplash.com/photo-1519996121844-d53802c2db84?ixlib=rb-0.3.5&s=d1dee2a9fa3c638b22032ccc870d6a50&auto=format&fit=crop&w=634&q=80"
              ]
            }
          }
        }
      }
    }
  }
}
```

Following the above schema the resulting file should look like the following:
```json
[
  {
    "title": "MINIMALISM",
    "files": [
      {
        "title": "Intro",
        "fileName": "https://images.unsplash.com/photo-1519996121844-d53802c2db84?ixlib=rb-0.3.5&s=d1dee2a9fa3c638b22032ccc870d6a50&auto=format&fit=crop&w=634&q=80"
      },
      {
        "title": "1",
        "fileName": "https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-0.3.5&s=8ca7af7198a3db03a788fa403f253ad0&auto=format&fit=crop&w=1387&q=80"
      },
      {
        "title": "2",
        "fileName": "https://images.unsplash.com/photo-1520079227293-0888e274dd20?ixlib=rb-0.3.5&s=b290bf50e442176e8d5b5d14e2d63747&auto=format&fit=crop&w=700&q=80"
      }
    ]
  }
]
```

The lightbox provides simple key commands:
- `left`: previous image
- `right`: next image
- `esc`: close lightbox

## API

#### LightboxService

##### Methods

- `loadGallery(configPath: string): Observable<GalleryAlbum[]>`: Loads the gallery from the specified file (e.g. '/assets/demo-gallery.json').

#### ModuleOptions

###### Properties

- `galleryOptions` (`IGalleryOptions?`): Object containing gallery configuration.
- `albumOprions` (`IAlbumOptions?`): Object containing album configuration.
- `lightboxOption` (`ILightboxOptions?`): Object containing lightbox configuration.

#### IGalleryOptions

###### Properties

- `width` (`string?`): Setting the width of the gallery relative to its parent (Allowed values are same as CSS `width`).

#### IAlbumOptions

#### Properties

- `backgroundColor` (`string?`): Setting the background color of the album element (Allowed values are same as CSS `background-color`).
- `coverImageWidth` (`string?`): Setting the width of the albums cover image relative to the album element (Allowed values are same as CSS `width`).
- `coverImageMaxHeight` (`string?`): Setting the maximum height of the albums cover image relative to the album element (Allowed values are same as CSS `max-height`).
- `titleColor` (`string?`): Setting the text color of the albums title (Allowed values are same as CSS `color`).

#### ILightboxOptions

###### Properties

- `backdropColor` (`string?`): Setting the lightbox' backdrop color (Allowed values are same as CSS `background-color`).
- `iconColor` (`string?`): Setting the lightbox' close icon color (Allowed values are same as CSS `color`).
- `dotColor` (`string?`): Setting the lightbox' image indicator dot color (Allowed values are same as CSS `background-color`).
- `imageMaxWidth` (`string?`): Setting the maximum width of the currently displayed image relative to the lightbox element (Allowed values are same as CSS `max-width`).
- `imageMaxHeight` (`string?`): Setting the maximum height of the currently displayed image relative to the lightbox element (Allowed values are same as CSS `max-height`).
