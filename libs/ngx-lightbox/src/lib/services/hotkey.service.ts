import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { HotkeyOptions } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HotkeyService {
  private document?: Document;

  private defaults: Partial<HotkeyOptions>;

  constructor(private eventManager: EventManager, @Inject(DOCUMENT) doc?: any) {
    this.document = doc;

    this.defaults = { element: this.document };
  }

  public addShortcut(options: Partial<HotkeyOptions>) {
    const merged = { ...this.defaults, ...options };
    const event = `keydown.${merged.keys}`;

    return new Observable(observer => {
      const handler = (e: Event) => {
        e.preventDefault();
        observer.next(e);
      };

      const dispose = this.eventManager.addEventListener(
        merged.element,
        event,
        handler
      );

      return () => {
        dispose();
      };
    });
  }
}
