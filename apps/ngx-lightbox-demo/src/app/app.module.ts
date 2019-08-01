import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxLightboxModule } from '@balticcode/ngx-lightbox';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxLightboxModule.forRoot({
      // galleryOptions: {
      //   width: '90%'
      // },
      // lightboxOptions: {
      //   dotColor: 'red',
      //   iconColor: 'lime'
      // }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
