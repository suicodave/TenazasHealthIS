import { Inject, InjectionToken } from '@angular/core';

export const COLLECTION_NAME = new InjectionToken<string>('collectionName');

export const DOMAIN_DISPLAY_NAME = new InjectionToken<string>('deleteHeader');

export const COLLECTION_DISPLAY_NAME = new InjectionToken<string>(
  'collectionDisplayName'
);

export const DIALOG_COMPONENT = new InjectionToken<any>('dialogComponent');

export const UPDATE_DIALOG_COMPONENT = new InjectionToken<any>(
  'updateDialogComponent'
);
