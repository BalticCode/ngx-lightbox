import { ModuleConfig } from './interfaces';
import { InjectionToken } from '@angular/core';

export const ConfigToken = new InjectionToken<ModuleConfig>('ConfigToken');
